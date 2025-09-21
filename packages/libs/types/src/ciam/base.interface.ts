import { AllPersonas } from './personas.constant';
import { AllRoles } from './roles.constant';
import { AllPermissions } from './permissions.constant';
import { EmployeeDataAccessClaimType } from './employee.interface';

export interface IStandardClaims {
  iss: string;
  sub: string;
  iat: number; // number of seconds since epoch
  exp: number; // number of seconds since epoch
  aud: string[];
}

export interface ICustomClaims {
  is_m2m_token?: boolean;
}

export interface IDecodedAccessToken extends IStandardClaims, ICustomClaims {
  azp: string;
  scope: string;
  permissions: AllPermissions[];
}

export interface IDecodedIdToken extends IStandardClaims, ICustomClaims {
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string;
  locale: string;
  updated_at: Date | string;
  email: string;
  email_verified: boolean;
  sid?: string;
  nonce?: string;
  org_id?: string;
  org_name?: string;
}

// This object will have all the keys from the Access Token, Id Token and custom claims
export interface IUserInfo extends IDecodedIdToken, IDecodedAccessToken {
  corporation_id: string;
  person_id: string;
  persona: AllPersonas;
  roles?: AllRoles[]; // Current Roles of the current lowest level org unit (e.g if brand level employee, then the roles at the current brand)
  data_access: Record<string, string>;
}

// Brand Access is in the data_access claim
// Current Brand is in the Header (x-pure-brand-id)

export interface IDataAccessResponse {
  data_access: EmployeeDataAccessClaimType | Record<string, string> | undefined;
  data_access_str: string | undefined;
}
