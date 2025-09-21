import { AllRoles, Auth0ConnectionType } from '.';

export interface IAuth0User {
  connection: Auth0ConnectionType;
  email: string;
  user_id?: string;
  username: string;
  password: string;
  user_metadata?: Record<string, string>;
  app_metadata?: Record<string, string>;
}

export interface IAuth0Role {
  id?: string;
  name: AllRoles;
  description: string;
}

export interface IAuth0Permissions {
  permission_name: string;
  description: string;
  resource_server_name: string;
  resource_server_identifier: string;
  sources: Array<Record<string, unknown>>;
}

export interface IAuth0Colors {
  primary: string;
  page_background: string;
}
export interface IAuth0Branding {
  logo_url: string;
  colos: IAuth0Colors[];
}

export interface IAuth0ConnectionDetails {
  name: string;
  strategy: string;
}

export interface IAuth0Connections {
  connection_id: string;
  assign_membership_on_login: boolean;
  connection?: IAuth0ConnectionDetails[];
}

export interface IAuth0Organization {
  name: string;
  display_name: string;
  branding?: IAuth0Branding;
  metadata?: Record<string, string>;
  enabled_connections: IAuth0Connections[];
}

export interface IAuth0Client {
  getAccessTokenSilently: (
    options?: IGetTokenSilentlyOptions,
  ) => Promise<string>;
}

export interface IGetTokenSilentlyOptions {
  cacheMode?: 'on' | 'off' | 'cache-only';
  authorizationParams?: {
    redirect_uri?: string;
    scope?: string;
    audience?: string;
    [key: string]: unknown;
  };
  timeoutInSeconds?: number;
  detailedResponse?: boolean;
}
