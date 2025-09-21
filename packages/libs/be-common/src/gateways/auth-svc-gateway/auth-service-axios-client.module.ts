import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthServiceAxiosClientService } from './auth-service-axios-client.service';

@Module({
  imports: [HttpModule],
  exports: [AuthServiceAxiosClientService, HttpModule],
  providers: [AuthServiceAxiosClientService],
})
export class AuthServiceAxiosClientModule {}
