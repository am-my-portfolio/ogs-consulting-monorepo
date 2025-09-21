import {
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export interface IAxiosResponse {
  url?: string;
  code?: string;
  message?: string;
  status?: number;
  status_text?: string;
  data?: string;
  headers?: Record<string, string>;
}

export class AxiosResponseDTO implements IAxiosResponse {
  @IsUrl()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  code?: string;

  @IsString()
  @IsOptional()
  message?: string;

  @IsNumber()
  @IsOptional()
  status?: number;

  @IsString()
  @IsOptional()
  status_text?: string;

  @IsString()
  @IsOptional()
  data?: string;

  @IsObject()
  @IsOptional()
  headers?: Record<string, string>;
}
