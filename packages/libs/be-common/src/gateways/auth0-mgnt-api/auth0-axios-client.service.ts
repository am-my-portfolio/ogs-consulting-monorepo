import { RawAxiosRequestHeaders } from 'axios';
import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OAuthAccessToken } from './auth0-axios.dto';

@Injectable()
export class Auth0AxiosClientService {
  private readonly logger = new Logger(Auth0AxiosClientService.name);
  private baseUrl = '';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    // Admin-service only works with the Auth0 management api which requires a specific base url.
    this.baseUrl =
      this.configService.get<string>('AUTH0_MANAGMENT_URL') ??
      'https://dev-7miap6f3j0o2zdmn.us.auth0.com';
  }

  async exec<T, D>(
    path: string,
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    headers: RawAxiosRequestHeaders,
    data?: D,
    params?: unknown, // TODO: make proper type for it when known
  ): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    this.logger.debug(`[exec] Making HTTP ${method} call to ${url}`);

    // TODO: Maybe add the headers here
    // Also: add the x-correlation-id header https://auth0.com/docs/api/management/v2
    return await this.httpService.axiosRef
      .request({
        url,
        method,
        headers,
        data,
        params,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.logger.error(
          {
            url: error.response?.config?.url,
            code: error.code,
            message: error.message,
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
          },
          'Error',
        );

        throw new HttpException(
          `${error.response?.data?.error}: ${error.response?.data?.message}`,
          error.response?.status as number,
        );
      });
  }

  async getTokenForManagementApi() {
    this.logger.debug('[getTokenForManagementApi]');

    const path = `/oauth/token`;
    const method = 'POST';
    const headers: RawAxiosRequestHeaders = {
      'content-type': 'application/x-www-form-urlencoded',
      // 'content-type': 'application/json'
    };

    const data = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: this.configService.get<string>('AUTH0_CLIENT_ID_MGNT_API')!,
      client_secret: this.configService.get<string>(
        'AUTH0_CLIENT_SECRET_MGNT_API',
      )!,
      audience: `${this.configService.get<string>('AUTH0_MANAGMENT_URL')}/api/v2/`,
    });

    const result = await this.exec<OAuthAccessToken, URLSearchParams>(
      path,
      method,
      headers,
      data,
    );
    return result.access_token;
  }
}
