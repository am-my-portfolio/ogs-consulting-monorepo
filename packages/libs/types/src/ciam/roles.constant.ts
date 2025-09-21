export enum Auth0CFORoles {
  CFO_VIEWER = 'CFO Viewer',
  CFO_LIMITED_EDITOR = 'CFO Limited Editor',
  CFO_UNLIMITED_EDITOR = 'CFO Unlimited Editor',
}

export enum Auth0TestRoles {
  NOT_A_ROLE = 'Role Does not Exist',
  LEAST_PRIVILEGE = 'Least Privileged Role',
}

export enum Auth0EmployeeRoles {
  // Core
  CORE_USER = 'Core User',
  CORE_LIMITED = 'Core Limited',
  GLOBAL_CONTENT_MANAGER = 'Global Content Manager',
  BRAND_CONTENT_MANAGER = 'Brand Content Manager',

  // Leasing
  LEASING_USER = 'Leasing User',

  // Accounting
  ACCT_USER = 'Accounting User',
  ACCT_LIMITED_APPROVE = 'Accounting Limited-Approve',

  // Other Admins
  ADMIN_USER = 'Admin User',
}

export enum Auth0PureOnlyRoles {
  ADMIN_LIMITED_TECH = 'Admin Limited-Tech',
  SUPER_ADMIN = 'Super Admin',
}

export enum Auth0CustomerRoles {
  RESIDENT = 'Resident',
  OWNER = 'Owner',
}

export type AllRoles =
  | Auth0CFORoles
  | Auth0TestRoles
  | Auth0EmployeeRoles
  | Auth0PureOnlyRoles
  | Auth0CustomerRoles;

export const AllRoles = {
  ...Auth0CFORoles,
  ...Auth0TestRoles,
  ...Auth0EmployeeRoles,
  ...Auth0PureOnlyRoles,
  ...Auth0CustomerRoles,
};

export type NonPureRoles = Auth0EmployeeRoles | Auth0CustomerRoles;

export const NonPureRoles = {
  ...Auth0EmployeeRoles,
  ...Auth0CustomerRoles,
};
