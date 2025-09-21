import {
  Auth0EmployeeRoles,
  Auth0CustomerRoles,
  Auth0PureOnlyRoles,
  UserLevel,
  AllRoles,
  NonPureRoles,
  AllPermissions,
  Auth0CFORoles,
  Auth0TestRoles,
} from '@am-ogs/types';
import { getRolePermissionsMap } from './permissions';

export const getRoleDescriptionMap = () => {
  return {
    [Auth0CFORoles.CFO_VIEWER]:
      'only capable of viewing all CFO Dashboard and data',
    [Auth0CFORoles.CFO_LIMITED_EDITOR]:
      'can always view data, and edit data during the established time restrictions',
    [Auth0CFORoles.CFO_UNLIMITED_EDITOR]:
      'capable of viewing all CFO data, and editing data without time restrictions',
    [Auth0TestRoles.LEAST_PRIVILEGE]:
      'a role with minimal, least privileged permissions',
    [Auth0EmployeeRoles.GLOBAL_CONTENT_MANAGER]:
      'can read and write contents at corporate level, such as tags, templates, playbooks, documents, etc',
    [Auth0EmployeeRoles.BRAND_CONTENT_MANAGER]:
      'can read and write contents at brand level, such as tags, templates, playbooks, documents, etc',
    [Auth0EmployeeRoles.CORE_USER]:
      'All access of CORE viewer + can read and write core data (profiles, comms, project tasks, templates, playbooks, etc) AND onboard residents, owners, and vendors. Will also be allowed to create branch-level reports with CORE data (in the future)',
    [Auth0EmployeeRoles.CORE_LIMITED]:
      'can do the same things as a CORE user, with some exceptions: they CANNOT view SSNs or other PII and they CANNOT create new vendors, owners, residents',
    [Auth0EmployeeRoles.LEASING_USER]:
      'has all the permissions of the Leasing Viewer role + can read and write leasing data and create leasing reports',
    [Auth0EmployeeRoles.ACCT_USER]:
      'can CRUD all data in the accounting system BUT CANNOT edit banking settings or approve payments',
    [Auth0EmployeeRoles.ACCT_LIMITED_APPROVE]:
      'can view everything and approve outgoing payments',
    [Auth0EmployeeRoles.ADMIN_USER]:
      'can manage all settings (global or branch-level), create users, create branches - basically do everything except create Admin users and create new corporations',
    [Auth0PureOnlyRoles.ADMIN_LIMITED_TECH]:
      'can manage back-end settings (technical things)',
    [Auth0PureOnlyRoles.SUPER_ADMIN]:
      'can administer every role the the system, create corporations, manage banking, etc',
    [Auth0CustomerRoles.OWNER]:
      'a property owner - read access to the owner portal',
    [Auth0CustomerRoles.RESIDENT]:
      'a property resident - read access to the resident portal',
  };
};

export const getAllRolesList = (): AllRoles[] => {
  return Object.values(AllRoles);
};

export const getNonPureRolesList = (): NonPureRoles[] => {
  return Object.values(NonPureRoles);
};

export const getUserLevelList = (): UserLevel[] => {
  return Object.values(UserLevel);
};

export const getRoleDescription = (role: AllRoles) => {
  const role_description_map = getRoleDescriptionMap();
  const key = role as keyof typeof role_description_map;
  const description = role_description_map[key];
  return description;
};

// TODO: write tests for this
export const getPermissionsForRole = (role: AllRoles) => {
  const role_permission_map = getRolePermissionsMap();
  const key = role as keyof typeof role_permission_map;
  const permissions: AllPermissions[] = role_permission_map[key];
  return permissions;
};
