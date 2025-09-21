import 'reflect-metadata';

import helmet from 'helmet';
import nocache from 'nocache';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
// import { initSelectiveModelHooks, ModelHooks } from '@purepm/entity-hooks';
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
  // initSelectiveModelHooks([ModelHooks.Person]);
  const app_id = 'Example';
  const logger = new Logger(`Pure ${app_id} Service`);
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  const configService = app.get(ConfigService);
  const port = configService.get('APP_EXAMPLE_SERVICE_PORT') || 100000000; // TODO: replace with correct values and then remove the TODO
  const node_env: Environment = configService.get('NODE_ENV') ?? Environment.DEV;

  app.use(nocache());
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
    origin: cors_config[node_env],
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

  logger.log(`revision #97`);

  setupSwagger(app, app_id);
  transformSwagger3To2(app, app_id, false);

  await app.listen(port, '0.0.0.0');
  logger.log(`${getCleanedPackageName() ?? 'Nest Service'} is running on: ${await app.getUrl()}`);
}

bootstrap();
