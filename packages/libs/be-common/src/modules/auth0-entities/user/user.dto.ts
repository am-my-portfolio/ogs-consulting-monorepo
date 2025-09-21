import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsIP,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Auth0ConnectionType, JwtIssuerType } from '@am-ogs/types';

export interface ILinkUserWithProvider {
  user_id: string;
  provider: JwtIssuerType;
}

export class Auth0IdentityDto {
  connection: Auth0ConnectionType;
  user_id: string;
  provider: JwtIssuerType;
  isSocial: boolean;
}

// TODO: update this
export class PureUserMetaData {}

export class Auth0BaseUser {
  @IsEmail()
  email: string;

  @IsOptional()
  @IsBoolean()
  email_verified?: boolean;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  nickname?: string;

  @IsString()
  given_name: string;

  @IsString()
  family_name: string;

  @IsOptional()
  @IsString()
  picture?: string;

  @IsObject()
  @IsOptional()
  @Type(() => PureUserMetaData)
  user_metadata?: PureUserMetaData;

  @IsOptional()
  @IsObject()
  app_metadata?: any;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  phone_number?: string;

  @IsOptional()
  @IsBoolean()
  phone_verified?: boolean;

  @IsOptional()
  @IsBoolean()
  blocked?: boolean;
}

export class Auth0UserResponseDto extends Auth0BaseUser {
  @IsString()
  user_id: string;

  @IsString()
  created_at: string;

  @IsString()
  updated_at: string;

  @IsArray()
  @Type(() => Auth0IdentityDto)
  identities: Auth0IdentityDto[];

  multifactor: string[];
}

export class CreateAuth0UserRequestDto extends Auth0BaseUser {
  @IsEnum(Auth0ConnectionType)
  connection: Auth0ConnectionType;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsBoolean()
  verify_email?: boolean;
}

export class UpdateAuth0UserRequestDto extends PartialType(
  CreateAuth0UserRequestDto,
) {}

export class GetAuth0UserResponseDto extends Auth0UserResponseDto {
  @IsOptional()
  @IsIP()
  last_ip?: string;

  @IsOptional()
  @IsDate()
  last_login?: Date;

  @IsOptional()
  @IsNumber()
  logins_count?: number;

  @IsOptional()
  @IsString()
  locale?: string;
}

export class LinkAccountsDto {
  @IsString()
  link_with: string; // JWT (id_token) of the secondary account

  @IsString()
  current_user_token: string;
}

export class LinkAccountsSeamplesslyDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  org_id?: string;
}

export class SearchableFieldsDto {
  phone_number?: string;
  phone_verified?: boolean;
  logins_count?: number;
  last_login?: string;
  last_ip?: string;
  blocked?: boolean;
  email?: string;
  email_domain?: string;
  identities?: IdentitesSearchFieldsDto[];
  name?: string;
  given_name?: string;
  family_name?: string;
  nickname?: string;
  organization_id?: string;
}

export class IdentitesSearchFieldsDto {
  connection?: string;
  provider?: string;
  user_id?: string;
  isSocial?: boolean; // Auth0 naming convention is inconsistent
}
