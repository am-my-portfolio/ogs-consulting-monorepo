import { TestingModule } from '@nestjs/testing';
import { AnalyticsService } from './analytics.service';
import { EventDto } from './types/analytics.dto';
import {
  BulkEmailRecipientStatusMap,
  SendGridWebhookEventType,
} from '@purepm/purepm-lovs';
import { SharedTestingModule } from '../shared-testing.module';
import {
  BULK_EMAIL_RECIPIENT_REPOSITORY,
  BulkEmailRecipient,
} from '@purepm/db-entities';
import { BulkEmailRecipientResponseDto } from '../mail/types/bulkEmailRecipient.dto';

describe('AnalyticsService', () => {
  let service: AnalyticsService;
  let bulk_email_recipient_entity: typeof BulkEmailRecipient;

  const mock_event: EventDto = {
    email: 'test@test.com',
    event: SendGridWebhookEventType.PROCESSED,
    ip: '1.1.1.1',
    response: '250 2.0.0 Ok: queued as 123',
    sg_event_id: '123',
    sg_message_id: '123',
    'smtp-id': '123',
    timestamp: 123,
    tls: 1,
    bulk_email_recipient_id: '123',
  };

  const mock_bulk_email_recipient: BulkEmailRecipientResponseDto = {
    bulk_email_recipient_id: '870f77f1-bba3-4bfc-b5f3-2f61a9f31f83',
    bulk_email_id: '4b10504d-0fa2-4101-89e4-ed08ef07d8f6',
    bulk_email_recipient_status_id: BulkEmailRecipientStatusMap.CREATED.id,
    email: 'test@test.com',
    personalization: '',
    active: true,
  };

  beforeEach(async () => {
    const module: TestingModule = await SharedTestingModule;
    bulk_email_recipient_entity = module.get<typeof BulkEmailRecipient>(
      BULK_EMAIL_RECIPIENT_REPOSITORY,
    );
    service = module.get<AnalyticsService>(AnalyticsService);
  });

  afterEach(async () => {
    jest.clearAllTimers();
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  describe('hasBulkEmailRecipient', () => {
    it('should return true if event has bulk_email_recipient_id', () => {
      const result = service.hasBulkEmailRecipientEvents([mock_event]);
      expect(result).toBe(true);
    });
  });

  describe('updateBulkEmailRecipientStatus', () => {
    it('should update the bulk email recipient status', async () => {
      const status = BulkEmailRecipientStatusMap.DELIVERED.id;
      const bulk_email_recipient_id =
        mock_bulk_email_recipient.bulk_email_recipient_id;
      const repo_spy = jest.spyOn(bulk_email_recipient_entity, 'update');

      const result = await service.updateBulkEmailRecipientStatus(
        status,
        bulk_email_recipient_id,
      );
      expect(repo_spy).toHaveBeenCalledWith(
        { bulk_email_recipient_status_id: status },
        { where: { bulk_email_recipient_id } },
      );
      expect(result).toBeUndefined();
    });
  });

  describe('saveBulkEmailRecipientEvents', () => {
    it('should call updateBulkEmailRecipientStatus', async () => {
      const status = BulkEmailRecipientStatusMap.DELIVERED.id;
      const bulk_email_recipient_id =
        mock_bulk_email_recipient.bulk_email_recipient_id;
      const update_spy = jest.spyOn(service, 'updateBulkEmailRecipientStatus');

      await service.saveBulkEmailRecipientEvents([mock_event]);

      expect(update_spy).toHaveBeenCalledWith(status, bulk_email_recipient_id);
    });
  });
});
