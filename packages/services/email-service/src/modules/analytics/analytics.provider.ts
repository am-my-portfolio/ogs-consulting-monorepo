import {
  BulkEmailRecipient,
  BULK_EMAIL_RECIPIENT_REPOSITORY,
} from '@purepm/db-entities';

export const analyticsProviders = [
  {
    provide: BULK_EMAIL_RECIPIENT_REPOSITORY,
    useValue: BulkEmailRecipient,
  },
];
