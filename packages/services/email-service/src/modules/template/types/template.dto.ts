import { IsString } from 'class-validator';

export class GetTemplateDTO {
  @IsString()
  body: string;

  @IsString()
  subject: string;
}
