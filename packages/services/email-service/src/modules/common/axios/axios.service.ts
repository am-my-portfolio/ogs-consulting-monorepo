import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { AxiosResponseDTO } from './types/axios.dto';
import { AxiosResponse, RawAxiosRequestHeaders } from 'axios';

@Injectable()
export class AxiosService {
  private readonly logger = new Logger(AxiosService.name);

  constructor(private readonly httpService: HttpService) {}

  async exec<T, D>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    headers: RawAxiosRequestHeaders,
    data?: D,
    params?: unknown,
  ): Promise<AxiosResponse<T>> {
    this.logger.debug(`[exec] Making HTTP ${method} call to ${url}`);

    return await this.httpService.axiosRef
      .request({
        url,
        method,
        headers,
        data,
        params,
        responseType: 'arraybuffer',
      })

      .then((response) => {
        return response;
      })
      .catch((e) => {
        this.logger.error(
          {
            url: e.response?.config?.url,
            code: e.code,
            message: e.message,
            status: e.response?.status,
            statusText: e.response?.statusText,
            data: e.response?.data,
          },
          'Error',
        );

        throw new HttpException(
          `${e.response?.data?.error}: ${e.response?.data?.message}`,
          e.response?.status as number,
        );
      });
  }

  async getDataFromLink(url: string) {
    this.logger.debug(`[getDataFromLink] Making HTTP GET call to ${url}`);

    const method = 'GET';
    const headers: RawAxiosRequestHeaders = {};
    return this.exec<AxiosResponseDTO, unknown>(url, method, headers);
  }
}
