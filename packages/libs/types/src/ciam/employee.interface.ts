import { AllRoles, AllPersonas, UserLevel } from '.';

export type DataAccessClaims = EmployeeDataAccessClaimType;

export type EmployeeDataAccessClaimType =
  | IBrandEmployeeDataAccessClaims
  | ICorporationEmployeeDataAccessClaims
  | IDivisionEmployeeDataAccessClaims;

// 5/3/2024 - New base employee data access claims
export interface IEmployeeBaseDataAccessClaims {
  is_default: boolean;
  user_level: UserLevel;
  person_id: string;
  corporation_id: string;
  auth0_organization_id: string;
}

// 5/3/2024 - New corporation employee data access claims
export interface ICorporationEmployeeDataAccessClaims
  extends IEmployeeBaseDataAccessClaims {
  roles: AllRoles[];
  persona: AllPersonas;
}
// 5/3/2024 - New division employee data access claims
export interface IDivisionEmployeeDataAccessClaims
  extends IEmployeeBaseDataAccessClaims {
  divisions: IDivisionsClaim[];
}

// 5/3/2024 - New brand employee data access claims
export interface IBrandEmployeeDataAccessClaims
  extends IEmployeeBaseDataAccessClaims {
  divisions: IDivisionsClaim[];
}

/*
Roles and persona are optional because they will be in the IBrandsClaim for brand level employees, but
they are required for division level employees.

Brands are optional because a division level employee has access to all brands 
in the division (so no need to specify them here)
*/
export interface IDivisionsClaim {
  division_id: string;
  is_default: boolean;
  roles?: AllRoles[];
  persona?: AllPersonas;
  brands?: IBrandsClaim[];
}

export interface IBrandsClaim {
  brand_id: string;
  is_default: boolean;
  persona: AllPersonas;
  roles: AllRoles[];
}

// Used When creating new User/Person/Employee/Customer (saves user's data_access)
export interface IDataAccess {
  corporation_id: string;
  is_default: boolean;
  access_control: IAccessControl;
  divisions?: IDataAccessDivision[];
}

export interface IDataAccessDivision {
  division_id: string;
  is_default: boolean;
  access_control: IAccessControl;
  brands?: IDataAccessBrand[];
}

export interface IDataAccessBrand {
  brand_id: string;
  is_default: boolean;
  access_control: IAccessControl;
}

export interface IAccessControl {
  persona: AllPersonas;
  roles: AllRoles[];
}
