import { TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { getSecret } from '@am-ogs/be-common';
import { SharedTestingModule } from '../modules/shared-testing.module';

describe('envConfig', () => {
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await SharedTestingModule;
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should get a static secret', () => {
    const secret_value = getSecret('APP_EMAIL_SERVICE_PORT');
    expect(secret_value).toBe('4010');
  });

  it('should get a remote secret from configService', () => {
    jest.spyOn(configService, 'get').mockImplementation((key: string) => {
      if (key === 'FRIENDLY_NAME') return 'Pure PM Email Service';
    });
    const secret_value = configService.get<string>('FRIENDLY_NAME');
    expect(secret_value).toBe('Pure PM Email Service');
  });
});
