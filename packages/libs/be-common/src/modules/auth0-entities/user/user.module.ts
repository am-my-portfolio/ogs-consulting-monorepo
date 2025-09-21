import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth0AxiosClientModule } from '../../../gateways';

@Module({
  imports: [Auth0AxiosClientModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
