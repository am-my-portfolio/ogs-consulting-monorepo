import { SendGridWebhookEventType } from '@purepm/purepm-lovs';
import { IsEmail, IsEnum, IsNumber, IsString } from 'class-validator';

export class EventDto {
  @IsEmail()
  email: string;

  @IsEnum(SendGridWebhookEventType)
  event: SendGridWebhookEventType;

  @IsString()
  ip: string;

  @IsString()
  response: string;

  @IsString()
  sg_event_id: string;

  @IsString()
  sg_message_id: string;

  @IsString()
  'smtp-id': string;

  @IsNumber()
  timestamp: number;

  @IsNumber()
  tls: number;

  @IsString()
  bulk_email_recipient_id: string;
}

export class MappedBulkEventDto extends EventDto {
  @IsString()
  bulk_email_recipient_status_id: string;

  @IsNumber()
  precedence: number;
}
