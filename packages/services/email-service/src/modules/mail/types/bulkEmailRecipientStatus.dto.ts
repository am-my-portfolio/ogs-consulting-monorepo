import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import {
  IBulkEmailRecipientStatus,
  IBulkEmailRecipientStatusResponse,
} from '@purepm/purepm-lovs';

export class BulkEmailRecipientStatusResponseDto
  implements IBulkEmailRecipientStatusResponse
{
  @IsString()
  bulk_email_recipient_status_id: string;

  @IsString()
  @IsOptional()
  bulk_email_recipient_status_name?: string;

  @IsString()
  @IsOptional()
  precedence?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

export class BulkEmailRecipientStatusDto
  extends BulkEmailRecipientStatusResponseDto
  implements IBulkEmailRecipientStatus
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
}
