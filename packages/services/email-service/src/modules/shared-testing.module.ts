import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { AuthModule, PureLoggerModule, envConfig } from '@am-ogs/be-common';

import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { TemplateModule } from './template/template.module';
import { MailModule } from './mail/mail.module';
import { AnalyticsModule } from './analytics/analytics.module';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const SharedTestingModule = Test.createTestingModule({
  imports: [
    HttpModule,
    AuthModule,
    PureLoggerModule,
    MailModule,
    TemplateModule,
    AnalyticsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
}).compile();
