import supertest from 'supertest';
import { TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { SharedTestingModule } from '../../src/modules/shared-testing.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let configService: ConfigService;

  beforeEach(async () => {
    const module_fixture: TestingModule = await SharedTestingModule;
    configService = module_fixture.get<ConfigService>(ConfigService);
    app = module_fixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /api/app/health', async () => {
    const path = '/api/app/health';
    const message = `${configService.get<string>(
      'FRIENDLY_NAME',
    )} and Database are Alive and Healthy`;
    return supertest(await app.getHttpServer())
      .get(path)
      .expect(200)
      .expect(message);
  });
});
