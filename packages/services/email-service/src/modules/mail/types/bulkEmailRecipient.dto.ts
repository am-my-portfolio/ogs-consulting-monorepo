import {
  IBulkEmailRecipientResponse,
  IBulkEmailRecipient,
} from '@purepm/purepm-lovs';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';

export class BulkEmailRecipientResponseDto
  implements IBulkEmailRecipientResponse
{
  @IsString()
  bulk_email_recipient_id: string;

  @IsOptional()
  @IsString()
  bulk_email_id?: string;

  @IsOptional()
  @IsString()
  bulk_email_recipient_status_id?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  personalization?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

export class BulkEmailRecipientDto
  extends BulkEmailRecipientResponseDto
  implements IBulkEmailRecipient
{
  @IsOptional()
  @IsString()
  created_by?: string;

  @IsOptional()
  @IsDate()
  created_date?: Date;

  @IsOptional()
  @IsString()
  updated_by?: string;

  @IsOptional()
  @IsDate()
  updated_date?: Date;

  @IsOptional()
  @IsString()
  corporation_id?: string;
}
