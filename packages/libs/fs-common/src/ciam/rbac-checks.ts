import {
  AllRoles,
  AllPermissions,
  IUserInfo,
  EmployeeDataAccessClaimType,
} from '@am-ogs/types';
import { UserTokenUtils, TokenUtils } from '.';

/* eslint-disable no-console */
export const allRolesMatch = (
  user_info: IUserInfo,
  all_required_route_roles: AllRoles[],
): boolean => {
  // If the route requires no roles, then allow access
  if (!all_required_route_roles || all_required_route_roles.length === 0) {
    return true;
  }

  const { is_m2m_token } = TokenUtils.determineTokenType(user_info);
  // Role guards cannot be used with M2M tokens
  if (is_m2m_token) {
    throw new Error('Unauthorized');
  }

  // Roles from Data Access Claim
  const { data_access } =
    UserTokenUtils.getDataAccessClaimFromUserProfile(user_info);
  const { roles: actual_user_roles_data_access } =
    UserTokenUtils.getEmployeeRolesAndPersonaForDefaultOrgUnit(
      data_access as EmployeeDataAccessClaimType,
    );
  const required_roles_found = all_required_route_roles.every((required_role) =>
    actual_user_roles_data_access?.includes(required_role),
  );

  return required_roles_found;
};

export const anyRolesMatch = (
  user_info: IUserInfo,
  any_required_route_roles: AllRoles[],
): boolean => {
  // If the route requires no roles, then allow access
  if (!any_required_route_roles || any_required_route_roles.length === 0) {
    return true;
  }

  const { is_m2m_token } = TokenUtils.determineTokenType(user_info);
  // Role guards cannot be used with M2M tokens
  if (is_m2m_token) {
    throw new Error('Unauthorized');
  }

  const { data_access } =
    UserTokenUtils.getDataAccessClaimFromUserProfile(user_info);
  const { roles: actual_user_roles_data_access } =
    UserTokenUtils.getEmployeeRolesAndPersonaForDefaultOrgUnit(
      data_access as EmployeeDataAccessClaimType,
    );
  const required_roles_found = any_required_route_roles.some((required_role) =>
    actual_user_roles_data_access?.includes(required_role),
  );

  return required_roles_found;
};

export const allPermissionsMatch = (
  user_info: IUserInfo,
  all_required_route_permissions: AllPermissions[],
): boolean => {
  // If the route requires no permissions, then allow access
  if (
    !all_required_route_permissions ||
    all_required_route_permissions.length === 0
  ) {
    return true;
  }

  const actual_user_permissions = user_info?.permissions;
  const required_permissions_found = all_required_route_permissions.every(
    (required_permission) =>
      actual_user_permissions?.includes(required_permission),
  );

  return required_permissions_found;
};

export const anyPermissionsMatch = (
  user_info: IUserInfo,
  any_required_route_permissions: AllPermissions[],
): boolean => {
  // If the route requires no permissions, then allow access
  if (
    !any_required_route_permissions ||
    any_required_route_permissions.length === 0
  ) {
    return true;
  }

  const actual_user_permissions = user_info?.permissions;
  const required_permissions_found = any_required_route_permissions.some(
    (required_permission) =>
      actual_user_permissions?.includes(required_permission),
  );

  return required_permissions_found;
};
