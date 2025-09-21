import { Injectable, Logger } from '@nestjs/common';
import { TemplateEmail } from '@purepm/db-entities';
import { GetTemplateDTO } from './types/template.dto';

@Injectable()
export class TemplateService {
  readonly templateEmailEntity;
  private readonly logger = new Logger(TemplateService.name);

  constructor() {
    this.templateEmailEntity = TemplateEmail;
  }

  async findOne(template_email_id: string): Promise<GetTemplateDTO> {
    this.logger.debug(`[findOne]`);

    const template = await this.templateEmailEntity.findOne({
      where: {
        template_email_id,
      },
    });

    return template?.dataValues;
  }
}
