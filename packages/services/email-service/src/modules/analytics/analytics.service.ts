import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { groupBy, orderBy } from 'lodash';
import sendgridApiClient from '@sendgrid/client';
import { EventDto, MappedBulkEventDto } from './types/analytics.dto';
import {
  BULK_EMAIL_RECIPIENT_REPOSITORY,
  BulkEmailRecipient,
  QueryTypes,
  connection,
} from '@purepm/db-entities';
import {
  hasSendGridEventBulkEmailRecipient,
  mapSendGridEventBulkEmailRecipientStatus,
} from './utils';

@Injectable()
export class AnalyticsService {
  private readonly logger = new Logger(AnalyticsService.name);
  constructor(
    private readonly configService: ConfigService,
    @Inject(BULK_EMAIL_RECIPIENT_REPOSITORY)
    private readonly bulkEmailRecipientEntity: typeof BulkEmailRecipient,
  ) {
    const api_key = this.configService.get<string>('SENDGRID_API_KEY');
    if (!api_key) {
      throw new UnauthorizedException('SENDGRID_API_KEY is not defined');
    }

    sendgridApiClient.setApiKey(api_key);
  }

  private filterBulkEmailEvents(events: EventDto[]) {
    return events.filter((event) => event.bulk_email_recipient_id);
  }

  private mapBulkEmailEvent(current_event: EventDto) {
    const event_exists = hasSendGridEventBulkEmailRecipient(
      current_event.event,
    );

    const { id, precedence } = mapSendGridEventBulkEmailRecipientStatus(
      current_event.event,
    );

    return {
      ...current_event,
      bulk_email_recipient_status_id: event_exists ? id : null,
      precedence,
    } as MappedBulkEventDto;
  }

  private reduceBulkEmailEvents(events: { [s: string]: MappedBulkEventDto[] }) {
    return Object.values(events).map((group) =>
      // Reduces bulk email events by selecting the event with the lowest precedence from each group.
      orderBy(group, ['precedence'], ['desc']).pop(),
    ) as MappedBulkEventDto[];
  }

  private getBulkEmailEventsToUpdate(events: EventDto[]) {
    const mapped_events = events.map(this.mapBulkEmailEvent);
    const grouped_events = groupBy(mapped_events, 'bulk_email_recipient_id');

    return this.reduceBulkEmailEvents(grouped_events);
  }

  async saveBulkEmailRecipientEvents(events: EventDto[]) {
    const filtered_events = this.filterBulkEmailEvents(events);
    const events_to_update = this.getBulkEmailEventsToUpdate(filtered_events);

    for (const event_to_update of events_to_update) {
      if (
        event_to_update &&
        event_to_update.bulk_email_recipient_id &&
        event_to_update.bulk_email_recipient_status_id
      ) {
        await this.updateBulkEmailRecipientStatus(
          event_to_update.bulk_email_recipient_status_id,
          event_to_update.bulk_email_recipient_id,
        );
      }
    }
  }

  async findOneMessage(message_id: string) {
    this.logger.debug('[findOneMessage] message_id: ', message_id);

    // TODO: this step is blocked
    // IT needs to buy the add-on
    // https://sendgrid.com/en-us/solutions/add-ons/30-days-additional-email-activity-history
    const temp_msg_id =
      '7jCHI1haTkyDLcVQVCFYRQ.filterdrecv-655bd866f5-ttdsl-1-65D00277-D.1';
    await sendgridApiClient.request({
      url: `/v3/messages/${temp_msg_id}`,
      method: 'GET',
    });
  }

  async updateBulkEmailRecipientStatus(
    status: string | null,
    bulk_email_recipient_id: string,
  ) {
    await connection.query(
      `UPDATE comms.bulk_email_recipient SET bulk_email_recipient_status_id = ? WHERE bulk_email_recipient_id = ?`,
      {
        replacements: [status, bulk_email_recipient_id],
        type: QueryTypes.UPDATE,
      },
    );
  }

  hasBulkEmailRecipientEvents = (events: EventDto[]): boolean => {
    return events.some((event) => !!event.bulk_email_recipient_id);
  };
}
