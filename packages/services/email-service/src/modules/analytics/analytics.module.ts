import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { analyticsProviders } from './analytics.provider';

@Module({
  controllers: [AnalyticsController],
  providers: [AnalyticsService, ...analyticsProviders],
})
export class AnalyticsModule {}
