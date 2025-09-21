import { TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { SharedTestingModule } from '../shared-testing.module';

describe('AppService', () => {
  let appService: AppService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await SharedTestingModule;
    appService = module.get<AppService>(AppService);
    configService = module.get<ConfigService>(ConfigService);
  });

  describe('root', () => {
    it('should return health confirmation', async () => {
      jest.spyOn(appService, 'pingDatabase').mockResolvedValue(true);

      const health_msg = `${configService.get<string>(
        'FRIENDLY_NAME',
      )} and Database are Alive and Healthy`;
      const response = await appService.healthCheck();

      expect(configService.get<string>('FRIENDLY_NAME')).toBe(
        'Pure PM Email Service',
      );
      expect(appService.pingDatabase).toHaveBeenCalledTimes(1);
      expect(response).toBe(health_msg);
    });

    it('should return not healthy confirmation error', async () => {
      jest.spyOn(appService, 'pingDatabase').mockResolvedValue(false);

      expect(configService.get<string>('FRIENDLY_NAME')).toBe(
        'Pure PM Email Service',
      );
      expect(async () => {
        await appService.healthCheck();
      }).rejects.toThrow(
        'Pure PM Email Service is Not Healthy. Database Failed to Connect',
      );
    });

    it('should throw error', async () => {
      jest
        .spyOn(appService, 'pingDatabase')
        .mockRejectedValue(new Error('Random Error'));

      expect(async () => {
        await appService.healthCheck();
      }).rejects.toThrow('Random Error');
    });
  });
});
