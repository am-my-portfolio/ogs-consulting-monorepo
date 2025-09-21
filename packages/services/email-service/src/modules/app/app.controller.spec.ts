import { TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { SharedTestingModule } from '../shared-testing.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await SharedTestingModule;
    appController = module.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });
});
