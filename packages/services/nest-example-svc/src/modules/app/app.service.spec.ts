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

      const health_msg = `${configService.get<string>('FRIENDLY_NAME')} and Database are Alive and Healthy`;
      const response = await appService.healthCheck();
      expect(response).toBe(health_msg);
    });
    it('should throw an error if the database is not available', async () => {
      jest.spyOn(appService, 'pingDatabase').mockResolvedValue(false);
      try {
        await appService.healthCheck();
      } catch (e) {
        expect(e.message).toBe('Internal Server Error');
      }
    });
  });
});
