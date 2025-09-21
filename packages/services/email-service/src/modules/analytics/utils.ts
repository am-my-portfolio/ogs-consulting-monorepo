import {
  BulkEmailRecipientStatusMap,
  SendGridWebhookEventType,
} from '@purepm/purepm-lovs';

export const hasSendGridEventBulkEmailRecipient = (event: string): boolean => {
  return Object.values(SendGridWebhookEventType).includes(
    event as SendGridWebhookEventType,
  );
};

export const mapSendGridEventBulkEmailRecipientStatus = (event: string) => {
  if (event === SendGridWebhookEventType.PROCESSED) {
    return BulkEmailRecipientStatusMap.PROCESSED;
  }
  if (event === SendGridWebhookEventType.DEFERRED) {
    return BulkEmailRecipientStatusMap.DEFERRED;
  }
  if (event === SendGridWebhookEventType.DELIVERED) {
    return BulkEmailRecipientStatusMap.DELIVERED;
  }
  if (event === SendGridWebhookEventType.OPEN) {
    return BulkEmailRecipientStatusMap.OPEN;
  }
  if (event === SendGridWebhookEventType.CLICK) {
    return BulkEmailRecipientStatusMap.CLICK;
  }
  if (event === SendGridWebhookEventType.BOUNCE) {
    return BulkEmailRecipientStatusMap.BOUNCE;
  }
  if (event === SendGridWebhookEventType.DROPPED) {
    return BulkEmailRecipientStatusMap.DROPPED;
  }
  if (event === SendGridWebhookEventType.SPAM_REPORT) {
    return BulkEmailRecipientStatusMap.SPAM_REPORT;
  }
  if (event === SendGridWebhookEventType.UNSUBSCRIBE) {
    return BulkEmailRecipientStatusMap.UNSUBSCRIBE;
  }
  if (event === SendGridWebhookEventType.GROUP_UNSUBSCRIBE) {
    return BulkEmailRecipientStatusMap.GROUP_UNSUBSCRIBE;
  }
  if (event === SendGridWebhookEventType.GROUP_RESUBSCRIBE) {
    return BulkEmailRecipientStatusMap.GROUP_RESUBSCRIBE;
  }
  return BulkEmailRecipientStatusMap.CREATED;
};
