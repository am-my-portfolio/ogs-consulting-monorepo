import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import {
  IBulkEmailStatus,
  IBulkEmailStatusResponse,
} from '@purepm/purepm-lovs';

export class BulkEmailStatusResponseDto implements IBulkEmailStatusResponse {
  @IsString()
  bulk_email_status_id: string;

  @IsString()
  @IsOptional()
  bulk_email_status_name: string;

  @IsBoolean()
  @IsOptional()
  active: boolean;
}

export class BulkEmailStatusDto
  extends BulkEmailStatusResponseDto
  implements IBulkEmailStatus
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
