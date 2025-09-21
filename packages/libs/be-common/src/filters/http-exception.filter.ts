import { Request, Response } from 'express';
import {
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    this.logger.debug('[catch]');

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const error_details = exception.getResponse();

    this.logger.error(exception);
    response.status(status).json({
      timestamp: new Date().toISOString(),
      path: request.url,
      error_details,
    });
  }
}
