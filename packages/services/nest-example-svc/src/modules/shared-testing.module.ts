import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { envConfig, AuthModule, PureLoggerModule } from '@am-ogs/be-common';

import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const SharedTestingModule = Test.createTestingModule({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
    }),
    PureLoggerModule,
    HttpModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
}).compile();
