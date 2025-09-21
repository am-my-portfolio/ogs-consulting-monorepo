import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  envConfig,
  PureLoggerModule,
  LoggerMiddleware,
  DatabaseModule,
  CoreHooksUserInfoMiddleware,
} from '@am-ogs/be-common';

import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
    }),
    PureLoggerModule,
    HttpModule,
    DatabaseModule,
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
        path: '/some/path',
        method: RequestMethod.POST,
      })
      .forRoutes('*');
    // https://docs.nestjs.com/middleware#excluding-routes
  }
}
