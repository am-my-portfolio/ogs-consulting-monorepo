import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  async validateApiKey(app_name: string, api_key: string): Promise<boolean> {
    this.logger.debug(`[validateApiKey] ${api_key} for app ${app_name}`);
    // this is where you will check in your database if the api_key is valid and not revoked, for the given app_name
    return false;
  }
}
