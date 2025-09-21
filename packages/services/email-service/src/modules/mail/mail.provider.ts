import {
  BulkEmail,
  BulkEmailStatus,
  BulkEmailRecipient,
  BULK_EMAIL_REPOSITORY,
  BULK_EMAIL_RECIPIENT_REPOSITORY,
  BULK_EMAIL_STATUS_REPOSITORY,
} from '@purepm/db-entities';

export const bulkEmailProviders = [
  {
    provide: BULK_EMAIL_REPOSITORY,
    useValue: BulkEmail,
  },
  {
    provide: BULK_EMAIL_STATUS_REPOSITORY,
    useValue: BulkEmailStatus,
  },
  {
    provide: BULK_EMAIL_RECIPIENT_REPOSITORY,
    useValue: BulkEmailRecipient,
  },
];
