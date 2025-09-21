import { TestingModule } from '@nestjs/testing';
import { DMSService } from './dms.service';
import { SharedTestingModule } from '../shared-testing.module';

describe('DMSService', () => {
  let service: DMSService;

  beforeEach(async () => {
    const module: TestingModule = await SharedTestingModule;

    service = module.get<DMSService>(DMSService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
