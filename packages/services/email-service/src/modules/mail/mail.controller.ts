import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiOAuth2, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { connection } from '@purepm/db-entities';
import { MailService } from './mail.service';
import { BulkEmailRequestDto } from './types/mail.dto';
import {
  RouteRoles,
  UserGuard,
  UserOrgAccessGuard,
  AnyRolesOrPermissionsGuard,
  RoutePermissions,
} from '@am-ogs/be-common';
import {
  AllRoles,
  Auth0Apis,
  Auth0M2MPermissions_Platform_Internal,
} from '@purepm/purepm-lovs';

@ApiTags('Mail')
@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  private readonly logger = new Logger(MailController.name);

  @ApiOAuth2([], Auth0Apis.USER_API_PLATFORM)
  @ApiOAuth2([], Auth0Apis.M2M_API_INTERNAL)
  @UseGuards(UserGuard, UserOrgAccessGuard, AnyRolesOrPermissionsGuard)
  @RouteRoles(AllRoles.CORE_USER, AllRoles.CORE_LIMITED) // TODO: May need to expand this to other roles
  @RoutePermissions(
    Auth0M2MPermissions_Platform_Internal.COMMS_FULL_TRANSACTIONS,
  )
  @ApiOperation({ summary: 'Send Email' })
  @ApiResponse({ status: 200, description: 'OK' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Post()
  async sendEmail(@Body() body: BulkEmailRequestDto): Promise<string> {
    this.logger.debug(`[sendEmail]`);

    return await connection.transaction(async () => {
      return this.mailService.emailFactory({ email_input: body });
    });
  }

  @ApiOAuth2([], Auth0Apis.USER_API_PLATFORM)
  @ApiOAuth2([], Auth0Apis.M2M_API_INTERNAL)
  @UseGuards(UserGuard, UserOrgAccessGuard, AnyRolesOrPermissionsGuard)
  @RouteRoles(AllRoles.CORE_USER, AllRoles.CORE_LIMITED) // TODO: May need to expand this to other roles
  @RoutePermissions(
    Auth0M2MPermissions_Platform_Internal.COMMS_FULL_TRANSACTIONS,
  )
  @Get()
  async findAll(@Query('page') page: number, @Query('count') count: number) {
    this.logger.debug('[findAll]');

    const pagination =
      (await this.mailService.getBulkEmailsPagination(page, count)) ?? {};
    const results = (await this.mailService.getBulkEmails(page, count)) ?? [];

    return {
      pagination,
      results,
    };
  }

  @ApiOAuth2([], Auth0Apis.USER_API_PLATFORM)
  @ApiOAuth2([], Auth0Apis.M2M_API_INTERNAL)
  @UseGuards(UserGuard, UserOrgAccessGuard, AnyRolesOrPermissionsGuard)
  @RouteRoles(AllRoles.CORE_USER, AllRoles.CORE_LIMITED) // TODO: May need to expand this to other roles
  @RoutePermissions(
    Auth0M2MPermissions_Platform_Internal.COMMS_FULL_TRANSACTIONS,
  )
  @Get(':id')
  async findOne(@Param('id') id: string) {
    this.logger.debug('[findOne]');

    return this.mailService.getBulkEmail(id);
  }
}
