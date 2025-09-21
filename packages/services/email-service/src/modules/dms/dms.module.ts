import { Module } from '@nestjs/common';
import { DMSService } from './dms.service';

@Module({
  providers: [DMSService],
  exports: [DMSService],
})
export class DMSModule {}
