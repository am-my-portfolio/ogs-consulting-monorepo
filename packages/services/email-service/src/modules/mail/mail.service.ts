import { Injectable, Inject, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailDataRequired } from '@sendgrid/mail';
import { AttachmentJSON } from '@sendgrid/helpers/classes/attachment';
import { PersonalizationJSON } from '@sendgrid/helpers/classes/personalization';
import {
  BULK_EMAIL_REPOSITORY,
  BULK_EMAIL_RECIPIENT_REPOSITORY,
  BULK_EMAIL_STATUS_REPOSITORY,
  BulkEmail,
  BulkEmailRecipient,
  BulkEmailStatus,
  connection as sequelize,
  Identifier,
} from '@purepm/db-entities';
import {
  BulkEmailStatusMap,
  BulkEmailRecipientStatusMap,
  IBulkEmailRecipientRequest,
  IBulkEmailFromRequest,
} from '@purepm/purepm-lovs';
import { getAttributesWithoutAuditFields } from '@purepm/gql-common';

import { calculatePagination } from '../../common';
import { AxiosService } from '../gateways/axios/axios.service';
import { TemplateService } from '../template/template.service';
import { DMSService } from '../dms/dms.service';
import { SendgridService } from '../gateways/sendgrid/sendgrid.service';
import {
  BulkEmailResponseDto,
  BulkEmailRequestDto,
  BulkEmailAttachmentRequestDto,
} from './types/mail.dto';
import {
  getAttachment,
  getDocIds,
  splitCustomPayloadRecipients,
} from './mail.utils';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  constructor(
    private readonly axiosService: AxiosService,
    private readonly configService: ConfigService,
    private readonly dmsService: DMSService,
    private readonly sendgridService: SendgridService,
    private readonly templateService: TemplateService,

    @Inject(BULK_EMAIL_REPOSITORY)
    private readonly bulkEmailEntity: typeof BulkEmail,
    @Inject(BULK_EMAIL_STATUS_REPOSITORY)
    private readonly bulkEmailStatusEntity: typeof BulkEmailStatus,
    @Inject(BULK_EMAIL_RECIPIENT_REPOSITORY)
    private readonly bulkEmailRecipientEntity: typeof BulkEmailRecipient,
  ) {}

  private async updateBulkEmailStatus(
    bulk_email_id: Identifier,
    status: string,
  ) {
    this.logger.debug(`[updateBulkEmailStatus]`);

    return this.bulkEmailEntity.update(
      { bulk_email_status_id: status },
      {
        where: {
          bulk_email_id,
          active: true,
        },
      },
    );
  }

  private async setBulkEmailRecord(
    email_payload: MailDataRequired,
    sendgrid_batch_id: string,
    audience?: string,
  ): Promise<BulkEmail> {
    this.logger.debug('[setBulkEmailRecord]');

    return this.bulkEmailEntity.create({
      date_sent: new Date(),
      audience,
      subject: email_payload.subject,
      from_email: (email_payload.from as { email: string }).email,
      sender: (email_payload.from as { name: string }).name,
      body: email_payload.html,
      active: true,
      sendgrid_batch_id,
      is_deleted: false,
      bulk_email_status_id: BulkEmailStatusMap.CREATED.id,
    });
  }

  private async setBulkEmailRecipientRecords(
    recipients: IBulkEmailRecipientRequest[],
    bulk_email_id: Identifier,
  ): Promise<BulkEmailRecipient[]> {
    this.logger.debug('[setBulkEmailRecipientRecords]');

    const recipients_result = recipients.map((recipient) => {
      const personalization = JSON.stringify({
        ...(recipient.personalization ?? {}),
        attachments: recipient.attachments ?? [],
      });

      return {
        bulk_email_id,
        bulk_email_recipient_status_id: BulkEmailRecipientStatusMap.CREATED.id,
        email: recipient.to,
        personalization,
        active: true,
      };
    });

    return this.bulkEmailRecipientEntity.bulkCreate(recipients_result);
  }

  private async getPersonalizations(
    recipients: BulkEmailRecipient[],
  ): Promise<PersonalizationJSON[]> {
    this.logger.debug(`[getPersonalizations]`);

    const recipients_result = [];

    for await (const recipient of recipients) {
      const recipient_json = recipient.toJSON();

      const attachments = recipient_json.personalization.attachments.length
        ? await this.getAttachments(recipient_json.personalization.attachments)
        : [];

      recipients_result.push({
        to: [{ email: recipient_json.email }],
        substitutions: recipient_json.personalization,
        custom_args: {
          bulk_email_recipient_id: recipient_json.bulk_email_recipient_id,
        },
        attachments,
      });
    }

    return recipients_result;
  }

  private async getAttachments(
    attachments?: BulkEmailAttachmentRequestDto[],
  ): Promise<AttachmentJSON[]> {
    this.logger.debug(`[getAttachments]`);

    if (!attachments?.length) return [];

    const attachments_result = [];

    for await (const attachment of attachments) {
      attachments_result.push(
        await getAttachment(attachment, this.axiosService, this.dmsService),
      );
    }

    return attachments_result;
  }

  private async setEmailBodyAndSubject(
    body: string,
    subject: string,
    template_id?: string,
  ): Promise<{ body: string; subject: string }> {
    this.logger.debug(`[setEmailBodyAndSubject]`);

    if (!template_id) return { body, subject };

    const template = await this.templateService.findOne(template_id);

    return {
      body: template.body ?? body,
      subject: subject ?? template.subject,
    };
  }

  private setFrom(from?: IBulkEmailFromRequest): IBulkEmailFromRequest {
    this.logger.debug(`[setFrom]`);

    return (
      from ?? {
        email: this.configService.get<string>(
          'BULK_EMAIL_DEFAULT_EMAIL',
        ) as string,
        name: this.configService.get<string>(
          'BULK_EMAIL_DEFAULT_NAME',
        ) as string,
      }
    );
  }

  async emailFactory({
    email_input,
  }: {
    email_input: BulkEmailRequestDto;
  }): Promise<string> {
    this.logger.debug(`[emailFactory]`);

    const {
      audience,
      body,
      from,
      recipients,
      subject,
      attachments,
      categories,
      reply_to,
      template_id,
    } = email_input;

    const email_payload: MailDataRequired = {
      attachments: [],
      categories: categories ?? [],
      from: from ?? {},
      html: body,
      personalizations: [],
      replyTo: reply_to,
      subject,
    };

    // Set Audience as Category
    email_payload.categories?.push(audience);
    email_payload.from = this.setFrom(from);

    // Set Body and Subject
    const { body: new_body, subject: new_subject } =
      await this.setEmailBodyAndSubject(body, subject, template_id);
    email_payload.subject = new_subject;
    email_payload.html = new_body;

    // Set Batch Id
    const batch_id = await this.sendgridService.getBatchId();
    email_payload.batchId = batch_id;

    // Set Attachments
    email_payload.attachments = await this.getAttachments(attachments);

    // Set Tracking Information
    const bulk_email = await this.setBulkEmailRecord(
      email_payload,
      batch_id,
      audience,
    );
    const bulk_email_id = bulk_email.toJSON().bulk_email_id;
    const bulk_email_recipients = await this.setBulkEmailRecipientRecords(
      recipients,
      bulk_email_id,
    );

    // Set Bulk Email DocIds
    const docs = getDocIds(bulk_email_id, attachments);
    await this.dmsService.bulkCreate(docs);

    // Set Recipients and its Personalizations
    email_payload.personalizations = await this.getPersonalizations(
      bulk_email_recipients,
    );

    const payloads = splitCustomPayloadRecipients(email_payload);

    // Send email
    await Promise.all(
      payloads.map((payload) => this.sendgridService.sendEmail(payload)),
    );

    // Update the bulk email status to SENT
    await this.updateBulkEmailStatus(bulk_email_id, BulkEmailStatusMap.SENT.id);

    return 'Email Sent';
  }

  async getBulkEmailsPagination(page: number, count: number) {
    this.logger.debug('[getBulkEmailsPagination');

    const total = await this.bulkEmailEntity.count();

    return {
      total,
      page,
      count,
    };
  }

  async getBulkEmails(
    page: number,
    count: number,
  ): Promise<BulkEmailResponseDto[]> {
    this.logger.debug('[getBulkEtoils');
    const { offset, limit } = calculatePagination(page, count);
    const bulk_email_attributes = getAttributesWithoutAuditFields(
      this.bulkEmailEntity,
    );
    const bulk_emails = (await this.bulkEmailEntity.findAll({
      attributes: [
        ...bulk_email_attributes,
        [
          sequelize.fn(
            'COUNT',
            sequelize.col('bulk_email_recipients.bulk_email_recipient_id'),
          ),
          'recipients_count',
        ],
      ],
      include: [
        {
          model: this.bulkEmailStatusEntity,
          as: 'bulk_email_status',
          attributes: getAttributesWithoutAuditFields(
            this.bulkEmailStatusEntity,
            ['active'],
          ),
        },
        {
          model: this.bulkEmailRecipientEntity,
          as: 'bulk_email_recipients',
          attributes: [],
        },
      ],
      where: {
        active: true,
      },
      nest: true,
      order: [['created_date', 'DESC']],
      group: [
        'bulk_email.bulk_email_id',
        'bulk_email_status.bulk_email_status_id',
      ],
      offset,
      limit,
      subQuery: false,
    })) as unknown as BulkEmail[];

    return bulk_emails.map((bulk_email) => bulk_email.toJSON());
  }

  async getBulkEmail(bulk_email_id: string) {
    this.logger.debug('[getBulkEmail');

    return (
      await this.bulkEmailEntity.findOne({
        attributes: getAttributesWithoutAuditFields(this.bulkEmailEntity),
        include: [
          {
            model: this.bulkEmailStatusEntity,
            as: 'bulk_email_status',
            attributes: getAttributesWithoutAuditFields(
              this.bulkEmailStatusEntity,
              ['active'],
            ),
          },
          {
            model: this.bulkEmailRecipientEntity,
            as: 'bulk_email_recipients',
            attributes: getAttributesWithoutAuditFields(
              this.bulkEmailRecipientEntity,
              ['active'],
            ),
          },
        ],
        where: {
          bulk_email_id,
          active: true,
        },
      })
    )?.toJSON();
  }
}
