import { TestingModule } from '@nestjs/testing';
import { TemplateService } from './template.service';
import { SharedTestingModule } from '../shared-testing.module';

describe('TemplateService', () => {
  let service: TemplateService;

  beforeEach(async () => {
    const module: TestingModule = await SharedTestingModule;

    service = module.get<TemplateService>(TemplateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
