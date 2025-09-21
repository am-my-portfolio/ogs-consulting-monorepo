import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import { AxiosModule } from '../gateways/axios/axios.module';
import { TemplateModule } from '../template/template.module';
import { bulkEmailProviders } from './mail.provider';
import { DMSModule } from '../dms/dms.module';
import { SendgridModule } from '../gateways/sendgrid/sendgrid.module';

@Module({
  imports: [AxiosModule, DMSModule, SendgridModule, TemplateModule],
  controllers: [MailController],
  providers: [MailService, ...bulkEmailProviders],
})
export class MailModule {}
