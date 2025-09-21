import {
  Auth0EmployeeRoles,
  AllPersonas,
  UserLevel,
  UserType,
  CustomerType,
  IDataAccess,
  IAccessControl,
} from '..';

export interface ICorporation {
  corporation_id?: string;
  corporation_name: string;
  auth0_organization_id: string;
}

export interface IDivision {
  corporation_id: string;
  division_type?: string;
  division_name: string;
}

export interface IBrand {
  division_id: string;
  brand_type?: string;
  brand_name: string;
  email?: string;
}

export interface IBasePerson {
  email: string;
  first_name: string;
  last_name: string;
}
export interface IPurePerson extends IBasePerson {
  person_id?: string;
  corporation_id?: string;
  date_of_birth: Date;
  middle_name?: string;
  maiden_name?: string;
  home_phone?: string;
  mobile_phone: string;
  driver_license_number?: string;
  driver_license_state?: string;
  driver_license_country_abv?: string;
  social_security_number?: string;
}

export interface IEmployee extends IBasePerson {
  preferred_language: string;
  user_level: UserLevel;
  phone: string | undefined;
  caller_id: string | undefined;
  data_access: IDataAccess[];
}

export interface ICreatePerson extends IBasePerson {
  user_type: UserType;
  user_level?: UserLevel;
  individual_user_type?: CustomerType;
  persona: AllPersonas;
  corporation_id: string;
  division_id?: string;
  brands?: string[];
  default_brand?: string;
  default_ownership_group_id?: string;
}

export interface IRole {
  role_name: Auth0EmployeeRoles;
  corporation_id: string;
  active: boolean;
}

export interface IPersona {
  persona_name: AllPersonas;
  corporation_id: string;
  active: boolean;
}

export interface IPureOwner {
  person_id: string;
  corporation_id: string;
  is_default?: boolean;
  default_ownership_group_id?: string;
  identity_provider_id?: string;
  access_control: IAccessControl;
}
