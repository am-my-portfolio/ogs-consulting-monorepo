import { Request } from 'express';
import {
  Controller,
  Post,
  Req,
  Logger,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { ApiOAuth2, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AllPermissions, AllRoles, Auth0Apis } from '@am-ogs/types';
import { EventDto } from './types/analytics.dto';
import {
  AllPermissionsGuard,
  AnyRolesGuard,
  RoutePermissions,
  RouteRoles,
  UserGuard,
} from '@am-ogs/be-common';

@ApiTags('Analytics')
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  private readonly logger = new Logger(AnalyticsController.name);

  // https://docs.sendgrid.com/for-developers/tracking-events/twilio-sendgrid-event-webhook-overview
  // https://docs.sendgrid.com/for-developers/tracking-events/getting-started-event-webhook
  @ApiOAuth2([], Auth0Apis.M2M_API_EXTERNAL)
  @UseGuards(UserGuard, AllPermissionsGuard)
  @RoutePermissions(AllPermissions.POST_SENDGRID_EVENTS)
  @ApiOperation({
    summary: `This endpoint is a webhook/callback for Sendgrid to send us the Real-time Events after an email is sent`,
  })
  @Post('event-webhook')
  webhook(@Req() req: Request) {
    this.logger.debug('[webhook]');

    const events: EventDto[] = req.body;
    if (events.length === 0) {
      return;
    } else if (this.analyticsService.hasBulkEmailRecipientEvents(events)) {
      return this.analyticsService.saveBulkEmailRecipientEvents(events);
    }
  }

  @ApiOAuth2([], Auth0Apis.M2M_API_EXTERNAL)
  @UseGuards(UserGuard, AnyRolesGuard)
  @RouteRoles(AllRoles.CORE_USER, AllRoles.CORE_LIMITED) // TODO: May need to expand this to other roles
  @Get('/message/:id')
  async findOneMessage(@Param('id') id: string) {
    this.logger.debug('[findOneMessage');

    return this.analyticsService.findOneMessage(id);
  }
}
