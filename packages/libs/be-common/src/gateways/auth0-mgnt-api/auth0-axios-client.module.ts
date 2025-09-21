import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { Auth0AxiosClientService } from './auth0-axios-client.service';

@Module({
  imports: [HttpModule],
  providers: [Auth0AxiosClientService],
  exports: [Auth0AxiosClientService],
})
export class Auth0AxiosClientModule {}
