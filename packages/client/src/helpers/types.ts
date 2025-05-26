import { AllRoles } from './auth';

export enum NavType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface Item {
  name: string;
  target?: string;
  description?: string;
  tab?: string;
  type?: NavType;
  icon: string;
  current: boolean;
  roles?: AllRoles[];
  items: Item[];
}

export interface IAuth0Colors {
  primary: string;
  page_background: string;
}

export interface IAuth0Branding {
  logo_url: string;
  colors: IAuth0Colors;
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

export interface IAuth0OrganizationResponse {
  id: string;
  display_name: string;
  name: string;
}
