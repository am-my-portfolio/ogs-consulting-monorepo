import {
  Injectable,
  Logger,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import SendgridMailClient from '@sendgrid/client';
import { ClientResponse, MailDataRequired, MailService } from '@sendgrid/mail';

@Injectable()
export class SendgridService {
  private readonly sendgridMailService = new MailService();
  private readonly sendgridApiClient = SendgridMailClient;
  private readonly logger = new Logger(SendgridService.name);

  constructor(private readonly configService: ConfigService) {
    const api_key = this.configService.get<string>('SENDGRID_API_KEY');

    if (!api_key) {
      throw new UnauthorizedException('SENDGRID_API_KEY is not defined');
    }

    this.sendgridMailService.setSubstitutionWrappers('{{', '}}');
    this.sendgridMailService.setApiKey(api_key);
    this.sendgridApiClient.setApiKey(api_key);
  }

  async getBatchId(): Promise<string> {
    this.logger.debug(`[getBatchId]`);

    const [batch_id_result] = await this.sendgridApiClient.request({
      url: '/v3/mail/batch',
      method: 'POST',
    });

    const { batch_id } = batch_id_result.body as unknown as {
      batch_id: string;
    };
    return batch_id;
  }

  async sendEmail(
    email_payload: MailDataRequired,
  ): Promise<[ClientResponse, unknown]> {
    this.logger.debug(`[sendEmail]`);

    try {
      return await this.sendgridMailService.send(email_payload);
    } catch {
      throw new UnprocessableEntityException('Failed to send email');
    }
  }
}
