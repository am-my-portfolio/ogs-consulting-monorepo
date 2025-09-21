import 'reflect-metadata';

import helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, Logger } from '@nestjs/common';
import { json } from 'express';
import {
  HttpExceptionFilter,
  PureLogger,
  SnakeCaseInterceptor,
  setupSwagger,
  transformSwagger3To2,
} from '@am-ogs/be-common';
import {
  Environment,
  otelSDK,
  cors_allowed_headers,
  cors_config,
  cors_max_age,
  cors_methods,
  getCleanedPackageName,
} from '@am-ogs/types';

import { AppModule } from './modules/app.module';

async function bootstrap() {
  otelSDK.start();
  const app_id = 'Email';
  const logger = new Logger(`Pure ${app_id} Service`);
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const configService = app.get(ConfigService);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const PORT = configService.get('APP_EMAIL_SERVICE_PORT') ?? 4010;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const REQUEST_SIZE_LIMIT =
    configService.get('APP_EMAIL_SERVICE_REQUEST_SIZE_LIMIT') ?? '30mb';
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const NODE_ENV: Environment =
    configService.get('NODE_ENV') ?? Environment.DEV;

  const using_global_prefix = true;
  app.setGlobalPrefix('api');
  app.use(json({ limit: REQUEST_SIZE_LIMIT }));
  app.useLogger(app.get(PureLogger));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new SnakeCaseInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, // this will strip away any extra keys in the request DTOs
    }),
  );

  app.enableCors({
    origin: cors_config[NODE_ENV],
    methods: cors_methods,
    allowedHeaders: cors_allowed_headers,
    maxAge: cors_max_age,
    credentials: true,
  });

  app.use(
    helmet({
      hsts: { maxAge: 31536000 },
      frameguard: { action: 'deny' },
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'"],
          'frame-ancestors': ["'none'"],
        },
      },
    }),
  );

  setupSwagger(app, app_id);
  transformSwagger3To2(app, app_id, using_global_prefix);

  logger.log(`revision #106`);

  await app.listen(PORT, '0.0.0.0');
  logger.log(
    `${
      getCleanedPackageName() ?? 'Nest Service'
    } is running on: ${await app.getUrl()}`,
  );
}

bootstrap();
