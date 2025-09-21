import { TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { getSecret, getEnv } from '@am-ogs/be-common';
import { SECRET_NOT_FOUND } from '@am-ogs/types';
import { SharedTestingModule } from '../modules/shared-testing.module';

describe('envConfig', () => {
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await SharedTestingModule;
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should get a static secret', () => {
    const secret_value = getSecret('APP_EXAMPLE_SERVICE_PORT');
    expect(secret_value).toBe('4011');
  });

  it('should get a remote secret from configService', () => {
    const secret_value = configService.get<string>('FRIENDLY_NAME');
    expect(secret_value).toBeDefined();

    expect(secret_value).toBe('Pure PM Example Service');
  });

  it('should return doppler secrets if DOPPLER_SECRETS_PAYLOAD is set', () => {
    const doppler_secrets_payload = {
      secretOne: 'one',
      secretTwo: 'two',
    };
    process.env.DOPPLER_SECRETS_PAYLOAD = JSON.stringify(doppler_secrets_payload);
    const env = getEnv();

    expect(env.secretOne).toEqual(doppler_secrets_payload.secretOne);
    expect(env.secretTwo).toEqual(doppler_secrets_payload.secretTwo);

    process.env.DOPPLER_SECRETS_PAYLOAD = undefined;
  });

  it('should return not found for a secret that does not exist', () => {
    const secret_value = getSecret('AN_OBVIOUSLY_FAKE_SECRET_KEY_THAT_WE_WOULD_NEVER_USE');
    expect(secret_value).toBe(SECRET_NOT_FOUND);
  });
});
