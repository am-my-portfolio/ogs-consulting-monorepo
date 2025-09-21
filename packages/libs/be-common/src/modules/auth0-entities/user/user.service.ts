import { RawAxiosRequestHeaders } from 'axios';
import { ConfigService } from '@nestjs/config';
import { Injectable, Logger } from '@nestjs/common';
import { Auth0AxiosClientService } from '../../../gateways/auth0-mgnt-api/auth0-axios-client.service';
import { Auth0UserResponseDto, CreateAuth0UserRequestDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService,
    private readonly auth0Gateway: Auth0AxiosClientService,
  ) {}

  private readonly logger = new Logger(UserService.name);

  // Create an Auth0 user who is not part of any Auth0 Organization
  async createNonOrgUser(user: CreateAuth0UserRequestDto) {
    this.logger.debug('[createNonOrgUser]');

    const access_token = await this.auth0Gateway.getTokenForManagementApi();

    // const { auth0_role_ids, auth0_user_roles } = await this.getRolesForPersona(persona, access_token);
    const auth0_user = await this.createAuth0User(user, access_token);
    // await this.assignRoles(auth0_user.user_id, auth0_role_ids, access_token);

    return {
      auth0_user,
      // auth0_user_roles,
    };
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update() {
    return `This action updates a user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  // https://auth0.com/docs/api/management/v2/users/post-users
  private async createAuth0User(
    user: CreateAuth0UserRequestDto,
    access_token: string,
  ): Promise<Auth0UserResponseDto> {
    this.logger.debug('[createAuth0User]');

    const path = `/api/v2/users`;
    const method = 'POST';
    const headers: RawAxiosRequestHeaders = {
      Accept: 'application/json',
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
    };

    const data = user;

    const result = await this.auth0Gateway.exec<
      Auth0UserResponseDto,
      CreateAuth0UserRequestDto
    >(path, method, headers, data);
    return result;
  }
}
