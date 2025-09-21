import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDate,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import {
  IBulkEmailResponse,
  IBulkEmailRequest,
  IBulkEmailFromRequest,
  IBulkEmailRecipientRequest,
} from '@am-ogs/types';
import { BulkEmailRecipientResponseDto } from './bulkEmailRecipient.dto';
import { BulkEmailStatusResponseDto } from './bulkEmailStatus.dto';

export class BulkEmailAttachmentRequestDto {
  @IsString()
  url: string;

  @IsOptional()
  @IsString()
  doc_id?: string;
}

export class BulkEmailRecipientRequestDto
  implements IBulkEmailRecipientRequest
{
  @IsString()
  to: string;

  @IsOptional()
  @IsArray()
  @Type(() => BulkEmailAttachmentRequestDto)
  @ValidateNested({ each: true })
  attachments?: BulkEmailAttachmentRequestDto[];

  @IsOptional()
  @IsObject()
  personalization?: Record<string, string>;
}

export class BulkEmailFromRequestDto implements IBulkEmailFromRequest {
  @IsString()
  email: string;

  @IsString()
  @IsOptional()
  name?: string;
}

export class BulkEmailRequestDto implements IBulkEmailRequest {
  @IsString()
  audience: string;

  @ValidateIf((o) => !o.template_id)
  @IsString()
  body: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => BulkEmailRecipientRequestDto)
  recipients: IBulkEmailRecipientRequest[];

  @ValidateIf((o) => !o.template_id)
  @IsString()
  subject: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BulkEmailAttachmentRequestDto)
  attachments?: BulkEmailAttachmentRequestDto[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  categories?: string[];

  @IsObject()
  @IsOptional()
  @Type(() => BulkEmailFromRequestDto)
  @ValidateNested()
  from: IBulkEmailFromRequest;

  @IsOptional()
  @IsString()
  reply_to?: string;

  @IsOptional()
  @IsString()
  template_id?: string;
}

export class BulkEmailResponseDto implements IBulkEmailResponse {
  @IsString()
  bulk_email_id: string;

  @IsOptional()
  @IsString()
  bulk_email_status_id?: string;

  @IsOptional()
  @IsDate()
  date_sent?: Date;

  @IsOptional()
  @IsString()
  audience?: string;

  @IsOptional()
  @IsString()
  subject?: string;

  @IsOptional()
  @IsString()
  from_email?: string;

  @IsOptional()
  @IsString()
  sender?: string;

  @IsOptional()
  @IsString()
  body?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsBoolean()
  is_deleted?: boolean;

  @IsOptional()
  @IsString()
  meta?: string;

  @IsOptional()
  @IsString()
  sendgrid_batch_id?: string;

  @IsOptional()
  @Type(() => BulkEmailStatusResponseDto)
  bulk_email_status?: BulkEmailStatusResponseDto;

  @IsOptional()
  @IsArray()
  @Type(() => BulkEmailRecipientResponseDto)
  bulk_email_recipients?: BulkEmailRecipientResponseDto[];

  @IsOptional()
  @IsInt()
  recipients_count?: number;
}
