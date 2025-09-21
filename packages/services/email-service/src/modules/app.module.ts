import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import {
  LoggerMiddleware,
  PureLoggerModule,
  CoreHooksUserInfoMiddleware,
  envConfig,
  AuthModule,
} from '@am-ogs/be-common';
import { AnalyticsModule } from './analytics/analytics.module';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
    }),
    AnalyticsModule,
    HttpModule,
    MailModule,
    AuthModule,
    PureLoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer
      .apply(CoreHooksUserInfoMiddleware)
      .exclude({
        path: '/analytics/event-webhook',
        method: RequestMethod.POST,
      })
      .forRoutes('*');
  }
}
