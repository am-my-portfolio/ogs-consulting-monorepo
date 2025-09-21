import { RawAxiosRequestHeaders } from 'axios';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Injectable, Logger, HttpException } from '@nestjs/common';
import { Auth0M2MApps, Environment, CustomHeader } from '@am-ogs/types';
// import { GoogleAuth } from 'google-auth-library';

@Injectable()
export class AuthServiceAxiosClientService {
  private readonly logger = new Logger(AuthServiceAxiosClientService.name);

  private baseUrl = '';
  private environment: string | undefined;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl =
      this.configService.get<string>('AUTH_SERVICE_BASE_URL_INTERNAL') ??
      'http://localhost:4012';
    this.environment = this.configService.get<string>('NODE_ENV');
  }

  async exec<T, D>(
    path: string,
    method: 'GET' | 'POST' | 'PUT',
    headers: RawAxiosRequestHeaders,
    data?: D,
    params?: unknown, // TODO: make proper type for it when known
  ): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    this.logger.debug(`[exec] Making HTTP call to ${url}`);

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
          '[exec]',
        );

        throw new HttpException(
          error.response?.data?.error,
          error.response?.status,
        );
      });
  }

  async getToken(
    app_id: Auth0M2MApps,
    corporation_id?: string,
    refresh_token = false,
  ): Promise<string> {
    this.logger.debug(`[getToken] for app ${app_id}`);

    let id_token: string | undefined = undefined;
    // if (this.environment !== Environment.LOCAL) {
    //   id_token = await this.getGoogleAuthIdToken(this.baseUrl); // get an id token from GCP for the auth service as an audience
    // }

    const path = `/identity/m2m-token/app/${app_id}`;
    const method = 'GET';
    const headers: RawAxiosRequestHeaders = {
      Accept: 'application/json',
      Authorization: id_token ? `Bearer ${id_token}` : undefined,
      'Content-Type': 'application/json',
      // [CustomHeader.X_API_KEY]: this.configService.get('API_KEY_INTERNAL_IPC'),
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = { refresh_token, corporation_id };

    const result = await this.exec<string, unknown>(
      path,
      method,
      headers,
      undefined,
      params,
    );
    return result;
  }

  // TODO: use the share/common/googleAuth.ts file
  // private async getGoogleAuthIdToken(audience: string) {
  //   this.logger.debug(`[getGoogleAuthIdToken] for aud ${audience}`);

  //   const auth = new GoogleAuth();
  //   const client = await auth.getIdTokenClient(audience);
  //   const token = await client.idTokenProvider.fetchIdToken(audience);
  //   return token;
  // }
}
