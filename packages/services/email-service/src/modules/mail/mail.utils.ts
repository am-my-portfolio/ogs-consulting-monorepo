import { AttachmentJSON } from '@sendgrid/helpers/classes/attachment';
import { UnprocessableEntityException } from '@nestjs/common';
import { DocumentMapType } from '@purepm/purepm-lovs';
import { AxiosService } from '../gateways/axios/axios.service';
import { DMSService } from '../dms/dms.service';
import { BulkEmailAttachmentRequestDto } from './types/mail.dto';
import { Identifier } from 'sequelize';
import { DMSCreateAgentMapInput } from '../dms/types/dms.types';
import { MailDataRequired } from '@sendgrid/mail';
import { PersonalizationData } from '@sendgrid/helpers/classes/personalization';

export const getAttachment = async (
  attachment: BulkEmailAttachmentRequestDto,
  axios_service: AxiosService,
  document_service: DMSService,
): Promise<AttachmentJSON> => {
  const attachment_response = await axios_service.getDataFromLink(
    attachment.url,
  );
  const document = await document_service.findDocumentByDocId(
    attachment.doc_id as Identifier,
  );
  const document_json = document?.toJSON();

  if (!document_json)
    throw new UnprocessableEntityException('Document not found');

  const file_name = (document_json?.doc_name ?? '').replace(/\.[^.]*$/, '');
  const file_extension = document_json?.extension ?? '';

  return {
    content: Buffer.from(attachment_response.data as ArrayBuffer).toString(
      'base64',
    ),
    filename: `${file_name}.${file_extension}`,
  };
};

export const getDocIds = (
  bulk_email_id: Identifier,
  attachments?: BulkEmailAttachmentRequestDto[],
) => {
  const result: DMSCreateAgentMapInput[] = [];

  attachments?.forEach(({ doc_id }) => {
    if (doc_id)
      result.push({
        doc_id,
        bulk_email_id,
        map_type_id: DocumentMapType.CONNECTED_PROFILE,
      });
  });

  return result;
};

export const splitPayloadByResidentsSize = (
  payload: MailDataRequired,
): MailDataRequired[] => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const MAX_RECIPIENTS = 1000;

  const { personalizations, ...rest_payload } = payload;
  const payloads: MailDataRequired[] = [];

  if (!personalizations?.length) {
    return [];
  }

  if (personalizations!.length <= MAX_RECIPIENTS) {
    return [payload];
  } else {
    while (personalizations!.length) {
      const personalizations_chunk = personalizations!.splice(
        0,
        MAX_RECIPIENTS,
      );
      payloads.push({
        ...rest_payload,
        personalizations: personalizations_chunk,
      });
    }
  }

  return payloads;
};

export const splitCustomPayloadRecipients = (
  payload: MailDataRequired,
): MailDataRequired[] => {
  const { personalizations, ...rest_payload } = payload;

  const common_payload: MailDataRequired = {
    ...rest_payload,
    personalizations: [],
  };
  const custom_attachment_payloads: MailDataRequired[] = [];

  personalizations!.forEach((personalization) => {
    const { attachments = [], ...rest_personalization } =
      personalization as PersonalizationData & {
        attachments?: AttachmentJSON[];
      };

    if (!attachments.length) {
      common_payload.personalizations!.push(rest_personalization);
    } else {
      custom_attachment_payloads.push({
        ...rest_payload,
        personalizations: [rest_personalization],
        attachments: [...(rest_payload.attachments ?? []), ...attachments],
      });
    }
  });

  const split_common_payloads = splitPayloadByResidentsSize(common_payload);

  return [...custom_attachment_payloads, ...split_common_payloads];
};
