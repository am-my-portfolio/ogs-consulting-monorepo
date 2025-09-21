import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getDatabaseConnection } from '@am-ogs/be-common';

@Injectable()
export class AppService {
  constructor(protected readonly configService: ConfigService) {}

  private readonly logger = new Logger(AppService.name);

  async pingDatabase(): Promise<boolean> {
    this.logger.debug('[pingDatabase]');
    const database_check = await getDatabaseConnection();
    return database_check ? true : false;
  }

  async healthCheck(): Promise<string> {
    this.logger.debug('[healthCheck]');
    try {
      const service_name = this.configService.get<string>('FRIENDLY_NAME');

      if (await this.pingDatabase()) {
        return `${service_name} and Database are Alive and Healthy`;
      } else {
        throw new Error(`${service_name} is Not Healthy. Database Failed to Connect`);
      }
    } catch (e) {
      this.logger.debug(e.message);
      throw new InternalServerErrorException();
    }
  }
}
