import { v4 as uuid } from 'uuid';
import { Logger } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing';
import { BULK_EMAIL_REPOSITORY, BulkEmail } from '@purepm/db-entities';
import { BulkEmailResponseDto } from './types/mail.dto';
import { SharedTestingModule } from '../shared-testing.module';
import { MailService } from './mail.service';

describe('MailService', () => {
  let service: MailService;
  let bulk_email_entity: typeof BulkEmail;
  beforeEach(async () => {
    const module: TestingModule = await SharedTestingModule;
    bulk_email_entity = module.get<typeof BulkEmail>(BULK_EMAIL_REPOSITORY);
  });

  afterEach(async () => {
    jest.clearAllTimers();
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('Is Defined', () => {
    beforeEach(async () => {
      const module: TestingModule = await SharedTestingModule;

      service = module.get<MailService>(MailService);
    });

    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });

  describe('getBulkEmailsPaginatedAndSorted', () => {
    it('should return paginated and sorted BulkEmails', async () => {
      const mock_page = 1;
      const mock_count = 3;
      const mock_bulk_emails: BulkEmailResponseDto[] = [
        {
          bulk_email_id: uuid(),
          date_sent: new Date(),
          audience: 'Residents',
          subject: 'Test Subject',
          from_email: 'my_brand@gmail.com',
          sender: 'User',
          body: '<p>{{resident.full_name}}</p>',
          active: true,
          is_deleted: false,
          meta: 'test',
          sendgrid_batch_id: uuid(),
        },
        {
          bulk_email_id: uuid(),
          date_sent: new Date(),
          audience: 'Residents',
          subject: 'Test Subject',
          from_email: 'my_brand@gmail.com',
          sender: 'User',
          body: '<p>{{resident.full_name}}</p>',
          active: true,
          is_deleted: false,
          meta: 'test',
          sendgrid_batch_id: uuid(),
        },
        {
          bulk_email_id: uuid(),
          date_sent: new Date(),
          audience: 'Residents',
          subject: 'Test Subject',
          from_email: 'my_brand@gmail.com',
          sender: 'User',
          body: '<p>{{resident.full_name}}</p>',
          active: true,
          is_deleted: false,
          meta: 'test',
          sendgrid_batch_id: uuid(),
        },
      ];

      jest.spyOn(service, 'getBulkEmails').mockResolvedValue(mock_bulk_emails);
      const result = await service.getBulkEmails(mock_page, mock_count);
      expect(result).toHaveLength(3);
      expect(result).toEqual(mock_bulk_emails);
    });

    it('should handle errors and log them', async () => {
      const mock_error = new Error('Error retrieving emails');
      const mock_page = 0;
      const mock_count = 10;
      jest.spyOn(bulk_email_entity, 'findAll').mockRejectedValue(mock_error);
      const logger_spy = jest.spyOn(Logger.prototype, 'log');
      await expect(
        service.getBulkEmails(mock_page, mock_count),
      ).rejects.toThrow(mock_error);
      expect(logger_spy).toHaveBeenCalledWith(mock_error);
    });
  });

  describe('findOne', () => {
    it('should return a bulk email by id', async () => {
      const id = 'testId';
      const expected_result: BulkEmailResponseDto = {
        bulk_email_id: id,
        date_sent: new Date(),
        audience: 'Residents',
        subject: 'Test Subject',
        from_email: 'my_brand@gmail.com',
        sender: 'User',
        body: '<p>{{resident.full_name}}</p>',
        active: true,
        is_deleted: false,
        meta: 'test',
        sendgrid_batch_id: uuid(),
      };

      jest.spyOn(service, 'getBulkEmail').mockResolvedValue(expected_result);
      const result = await service.getBulkEmail(id);
      expect(result).toEqual(expected_result);
    });

    it('should handle errors and log them', async () => {
      const mock_error = new Error('Test error');
      jest.spyOn(bulk_email_entity, 'findOne').mockRejectedValue(mock_error);
      const logger_spy = jest.spyOn(Logger.prototype, 'log');
      const result = await service.getBulkEmail('invalid-id');
      expect(result).toBeUndefined();
      expect(logger_spy).toHaveBeenCalledWith(
        'Error retrieving email',
        mock_error,
      );
    });
  });
});
