import {
  IUserInfo,
  UserLevel,
  AllRoles,
  Environment,
  DataAccessClaims,
  AllPersonas,
  IDataAccessResponse,
  ICorporationEmployeeDataAccessClaims,
  IDivisionEmployeeDataAccessClaims,
  IBrandEmployeeDataAccessClaims,
  EmployeeDataAccessClaimType,
} from '@am-ogs/types';

const node_env = process.env.NODE_ENV as Environment;

/* eslint-disable no-console */
export class UserTokenUtils {
  static readonly getDataAccessClaimFromUserProfile = (
    user_profile: IUserInfo,
  ): IDataAccessResponse => {
    // console.debug(`${log_prefix} [func: getDataAccessClaimFromUserProfile] Received:`, {
    //   data_access_key,
    //   user_profile,
    // });

    if (!user_profile) {
      // console.debug(`${log_prefix} [func: getDataAccessClaimFromUserProfile] Error:`, 'Undefined user_profile');
      return { data_access: undefined, data_access_str: undefined };
    }

    const current_org_id = user_profile?.org_id;
    const data_access = user_profile.data_access;
    const verified_data_access =
      data_access?.auth0_organization_id === current_org_id;

    if (data_access && verified_data_access) {
      const data_access_str = JSON.stringify(data_access, null, 2);
      // console.debug(`${log_prefix} [func: getDataAccessClaimFromUserProfile] Returning:`, { data_access });

      return { data_access, data_access_str };
    } else {
      // console.debug(
      //   `${log_prefix} [func: getDataAccessClaimFromUserProfile] Error:`,
      //   'Invalid or Incomplete Data Access Claims Found',
      // );
      return { data_access: undefined, data_access_str: undefined };
    }
  };

  static readonly getEmployeeCorporationFromDataAccessClaims = (
    employee_data_access: EmployeeDataAccessClaimType,
  ): string => {
    // console.debug(`${log_prefix} [func: getEmployeeCorporationFromDataAccessClaims] Received:`, { employee_data_access });

    if (!employee_data_access) {
      // console.debug(`${log_prefix} [func: getEmployeeCorporationFromDataAccessClaims] Error:`, 'Undefined Employee Data Access');
      throw new Error('Not an Employee');
    }
    return employee_data_access.corporation_id;
  };

  static readonly getEmployeeDivisionsFromDataAccessClaims = (
    employee_data_access:
      | IBrandEmployeeDataAccessClaims
      | IDivisionEmployeeDataAccessClaims,
  ): string[] => {
    // console.debug(`${log_prefix} [func: getEmployeeDivisionsFromDataAccessClaims] Received:`, { employee_data_access });
    let division_ids: string[] = [];

    if (employee_data_access.divisions) {
      division_ids = employee_data_access.divisions.map(
        (division: { division_id: string }) => division.division_id,
      );
    } else {
      throw new Error('No Divisions');
    }

    // console.debug(`${log_prefix} [func: getEmployeeDivisionsFromDataAccessClaims] Returning:`, {
    //   division_ids,
    // });
    return division_ids;
  };

  static readonly getEmployeeBrandsFromDataAccessClaims = (
    employee_data_access: IBrandEmployeeDataAccessClaims,
  ): string[] | undefined => {
    if (employee_data_access?.divisions) {
      const brand_ids: string[] = [];

      for (const divisions of employee_data_access.divisions) {
        const divsion_brands = divisions.brands?.map(
          (brand: { brand_id: string }) => brand.brand_id,
        );
        if (divsion_brands) {
          brand_ids.push(...divsion_brands);
        }
      }

      // console.debug(`${log_prefix} [func: getEmployeeBrandsFromDataAccessClaims] Returning:`, { brand_ids });
      return brand_ids;
    } else {
      // console.debug(
      //   `${log_prefix} [func: getEmployeeBrandsFromDataAccessClaims] Error: No Brands Found in Data Access Claim`,
      // );
      return undefined;
    }
  };

  static readonly getRolesAndPersonaFromDataAccessClaims = (
    data_access: DataAccessClaims,
  ) => {
    // console.debug(`${log_prefix} [func: getRolesAndPersonaFromDataAccessClaims] Received:`, { data_access });

    if (data_access) {
      let persona: AllPersonas | undefined = undefined;
      let roles: AllRoles[] | undefined = undefined;
      if ((data_access as EmployeeDataAccessClaimType).user_level) {
        ({ persona, roles } =
          UserTokenUtils.getEmployeeRolesAndPersonaForDefaultOrgUnit(
            data_access as EmployeeDataAccessClaimType,
          ));
      }

      roles?.sort();
      // console.debug(`${log_prefix} [func: getRolesAndPersonaFromDataAccessClaims] Returning:`, {
      //   persona,
      //   roles,
      // });
      return { persona, roles };
    } else {
      // console.debug(`${log_prefix} [func: getRolesAndPersonaFromDataAccessClaims] Error: No Data Access Claim Found`);
      throw new Error('No Data Access');
    }
  };

  static readonly getEmployeeRolesAndPersonaForDefaultOrgUnit = (
    employee_data_access: EmployeeDataAccessClaimType,
  ): { persona: AllPersonas | undefined; roles: AllRoles[] | undefined } => {
    // console.debug(`${log_prefix} [func: getEmployeeRolesAndPersonaForDefaultOrgUnit] Received:`, { employee_data_access });

    if (employee_data_access) {
      let persona: AllPersonas | undefined = undefined;
      let roles: AllRoles[] | undefined = [];

      if (employee_data_access.user_level === UserLevel.CORPORATE) {
        persona = (employee_data_access as ICorporationEmployeeDataAccessClaims)
          .persona;
        roles = (employee_data_access as ICorporationEmployeeDataAccessClaims)
          .roles;
        return { persona, roles };
      } else if (employee_data_access.user_level === UserLevel.DIVISION) {
        const default_division =
          UserTokenUtils.getDefaultDivisionFromDataAccessClaims(
            employee_data_access as IDivisionEmployeeDataAccessClaims,
          );
        if (default_division) {
          persona = default_division.persona;
          roles = default_division.roles;
          return { persona, roles };
        }
        const first_division = (
          employee_data_access as IDivisionEmployeeDataAccessClaims
        ).divisions?.[0];
        if (first_division) {
          persona = first_division.persona;
          roles = first_division.roles;
          return { persona, roles };
        }
      } else if (employee_data_access.user_level === UserLevel.BRAND) {
        const default_division =
          UserTokenUtils.getDefaultDivisionFromDataAccessClaims(
            employee_data_access as IBrandEmployeeDataAccessClaims,
          );
        // console.debug(`${log_prefix} [func: getEmployeeRolesAndPersonaForDefaultOrgUnit]:`, { default_division });
        const default_brand = default_division?.brands?.find(
          (b: { is_default: boolean }) => b.is_default === true,
        );
        if (default_division && default_brand) {
          persona = default_brand?.persona;
          roles = default_brand?.roles;
          return { persona, roles };
        } else if (default_division?.brands) {
          const first_brand = default_division?.brands[0];
          persona = first_brand?.persona;
          roles = first_brand.roles;
          return { persona, roles };
        } else {
          const first_brand = (
            employee_data_access as IBrandEmployeeDataAccessClaims
          ).divisions?.[0].brands?.[0];
          persona = first_brand?.persona;
          roles = first_brand?.roles;
          return { persona, roles };
        }
      }
    }
    throw new Error('No Employee Data Access');
  };

  static readonly getDefaultDivisionFromDataAccessClaims = (
    employee_data_access: EmployeeDataAccessClaimType,
  ) => {
    const default_division = (
      employee_data_access as
        | IDivisionEmployeeDataAccessClaims
        | IBrandEmployeeDataAccessClaims
    ).divisions?.find((d: { is_default: boolean }) => d.is_default === true);
    return default_division;
  };

  static readonly getDefaultOrgUnitsFromDataAccessClaims = (
    employee_data_access: EmployeeDataAccessClaimType,
  ) => {
    let default_corporation_id: string | undefined = undefined;
    let default_division_id: string | undefined = undefined;
    let default_brand_id: string | undefined = undefined;
    let default_login_unit: string | undefined = undefined;

    if (employee_data_access) {
      default_corporation_id = employee_data_access.corporation_id;
      const default_division = (
        employee_data_access as
          | IBrandEmployeeDataAccessClaims
          | IDivisionEmployeeDataAccessClaims
      ).divisions?.find((d) => d.is_default === true);
      default_division_id = default_division?.division_id;

      const default_brand = default_division?.brands?.find(
        (b: { is_default: boolean }) => b.is_default === true,
      );
      default_brand_id = default_brand?.brand_id;

      const { user_level } = employee_data_access;
      if (user_level === UserLevel.CORPORATE) {
        default_login_unit = default_corporation_id;
      } else if (user_level === UserLevel.DIVISION) {
        default_login_unit = default_division_id;
      } else if (user_level === UserLevel.BRAND) {
        default_login_unit = default_brand_id;
      }
    }

    // console.debug(`${log_prefix} [func: getDefaultOrgUnitsFromDataAccess] Returning:`, {
    //   default_corporation_id,
    //   default_division_id,
    //   default_brand_id,
    //   default_login_unit,
    // });
    return {
      default_corporation_id,
      default_division_id,
      default_brand_id,
      default_login_unit,
    };
  };

  static readonly getEmployeeCurrentDetailsFromAccessToken = (
    decoded_access_token: IUserInfo,
  ) => {
    const { data_access } =
      UserTokenUtils.getDataAccessClaimFromUserProfile(decoded_access_token);

    if (data_access) {
      const employee_data_access = data_access as EmployeeDataAccessClaimType;
      const { persona, roles } =
        UserTokenUtils.getRolesAndPersonaFromDataAccessClaims(
          employee_data_access,
        );
      const { person_id, corporation_id } = employee_data_access;
      const brand_access = UserTokenUtils.getEmployeeBrandsFromDataAccessClaims(
        employee_data_access as IBrandEmployeeDataAccessClaims,
      );

      const partial_user_info: Partial<IUserInfo> = {
        person_id,
        corporation_id,
        persona,
        roles,
      };

      // console.debug(`${log_prefix} [func: getEmployeeCurrentDetailsFromAccessToken] Returning:`, {
      //   partial_user_info,
      // });
      return partial_user_info;
    }

    return undefined;
  };

  static readonly getUserDataAccessDetails = (user_info: IUserInfo) => {
    const { data_access } =
      UserTokenUtils.getDataAccessClaimFromUserProfile(user_info);

    const employee_data_access = data_access;
    if (employee_data_access) {
      const { user_level, corporation_id, person_id, auth0_organization_id } =
        employee_data_access;

      const {
        default_corporation_id,
        default_division_id,
        default_brand_id,
        default_login_unit,
      } = UserTokenUtils.getDefaultOrgUnitsFromDataAccessClaims(
        employee_data_access as EmployeeDataAccessClaimType,
      );
      const { persona, roles: default_org_unit_roles } =
        UserTokenUtils.getRolesAndPersonaFromDataAccessClaims(
          employee_data_access as EmployeeDataAccessClaimType,
        );

      const default_org_units = {
        default_corporation_id,
        default_division_id,
        default_brand_id,
        default_login_unit,
      };
      // console.debug(`${log_prefix} [func: getUserDataAccessDetails]`, {
      //   user_level,
      //   corporation_id,
      //   person_id,
      //   default_org_unit_roles,
      //   default_org_units,
      // });

      return {
        user_level,
        corporation_id,
        person_id,
        persona,
        default_org_unit_roles,
        default_org_units,
        auth0_organization_id,
      };
    }

    throw new Error('No Employee Data Access');
  };
}
