import {
  Auth0AcctPermissions,
  Auth0AdminPermissions,
  Auth0CorePermissions,
  Auth0LeasingPermissions,
  Auth0PortalPermissions,
  Auth0EmployeeRoles,
  Auth0CustomerRoles,
  Auth0PureOnlyRoles,
  Auth0Permissions,
  Auth0MaintPermissions,
  Auth0Apis,
  Auth0M2MPermissions_Platform_External,
  Auth0CommsPermissions,
  Auth0TestRoles,
  Auth0M2MPermissions_Platform_Internal,
  Auth0CFORoles,
  Auth0CFOPermissions,
} from '@am-ogs/types';

export const getRolePermissionsMap = () => {
  return {
    // Special
    [Auth0TestRoles.LEAST_PRIVILEGE]: [Auth0Permissions.LEAST_PRIVILEGE],

    // CFO Dashboard
    [Auth0CFORoles.CFO_VIEWER]: [Auth0CFOPermissions.CFO_VIEW],
    [Auth0CFORoles.CFO_LIMITED_EDITOR]: [
      Auth0CFOPermissions.CFO_VIEW,
      Auth0CFOPermissions.CFO_EDIT,
    ],
    [Auth0CFORoles.CFO_UNLIMITED_EDITOR]: [
      Auth0CFOPermissions.CFO_VIEW,
      Auth0CFOPermissions.CFO_EDIT,
      Auth0CFOPermissions.CFO_EDIT_UNLIMITED,
    ],

    // Core
    [Auth0EmployeeRoles.CORE_USER]: [
      Auth0CorePermissions.CORE_FULL_FEDERAL_ID,
      Auth0CorePermissions.CORE_FULL_BANK_ID,
      Auth0CorePermissions.CORE_FULL_DOCUMENT,
      Auth0CorePermissions.CORE_SEND_PORTAL_INVITE,
      Auth0CorePermissions.CORE_READ_SETTINGS,
      Auth0CorePermissions.CORE_FULL_OWNER_ONBOARDING,
      Auth0CorePermissions.CORE_READ_OWNER_ONBOARDING,
      Auth0CorePermissions.CORE_FULL_VENDOR_ONBOARDING,
      Auth0CorePermissions.CORE_READ_VENDOR_ONBOARDING,
      Auth0CorePermissions.CORE_FULL_OWNERSHIP_GROUP_ONBOARDING,
      Auth0CorePermissions.CORE_READ_OWNERSHIP_GROUP_ONBOARDING,
      Auth0MaintPermissions.MAINT_FULL_WORK_ORDER,
    ],

    [Auth0EmployeeRoles.CORE_LIMITED]: [
      Auth0CorePermissions.CORE_FULL_DOCUMENT,
      Auth0CorePermissions.CORE_READ_SETTINGS,
      Auth0CorePermissions.CORE_READ_PORTAL_INVITE,
      Auth0CorePermissions.CORE_FULL_VENDOR_ONBOARDING,
      Auth0CorePermissions.CORE_READ_VENDOR_ONBOARDING,
      Auth0MaintPermissions.MAINT_FULL_WORK_ORDER,
    ],

    [Auth0EmployeeRoles.LEASING_USER]: [
      Auth0LeasingPermissions.LEASING_SIGN_DOCUSIGN_COUNTER_SIGN,
      Auth0LeasingPermissions.LEASING_FULL_APPLICANT_VERIFICATION,
      Auth0LeasingPermissions.LEASING_FULL_APPLICANT_SSN,
      Auth0LeasingPermissions.LEASING_FULL_APPLICANT_DOCUMENTS,
      Auth0LeasingPermissions.LEASING_READ_APPLICANT_DOCUMENTS,
      Auth0LeasingPermissions.LEASING_FULL_BACKGROUND_CHECK_REPORT,
      Auth0LeasingPermissions.LEASING_READ_SETTINGS,
      Auth0MaintPermissions.MAINT_READ_SETTINGS,
    ],

    [Auth0EmployeeRoles.GLOBAL_CONTENT_MANAGER]: [
      Auth0CorePermissions.CORE_FULL_GLOBAL_TAGS,
      Auth0CorePermissions.CORE_FULL_BRANCH_TAGS,
      Auth0CorePermissions.CORE_READ_GLOBAL_TAGS,
      Auth0CorePermissions.CORE_READ_BRANCH_TAGS,
    ],

    [Auth0EmployeeRoles.BRAND_CONTENT_MANAGER]: [
      Auth0CorePermissions.CORE_READ_GLOBAL_TAGS,
      Auth0CorePermissions.CORE_FULL_BRANCH_TAGS,
      Auth0CorePermissions.CORE_READ_BRANCH_TAGS,
    ],

    // Accounting
    [Auth0EmployeeRoles.ACCT_USER]: [
      Auth0AcctPermissions.ACCT_FULL_TRANSACTIONS_TABLE,
      Auth0AcctPermissions.ACCT_FULL_NEW_CHARGE,
      Auth0AcctPermissions.ACCT_FULL_CHARGE,
      Auth0AcctPermissions.ACCT_FULL_NEW_DEPOSIT,
      Auth0AcctPermissions.ACCT_FULL_DEPOSIT,
      Auth0AcctPermissions.ACCT_FULL_NEW_RESIDENT_RECEIPT,
      Auth0AcctPermissions.ACCT_FULL_RESIDENT_RECEIPT,
      Auth0AcctPermissions.ACCT_FULL_NEW_BILL,
      Auth0AcctPermissions.ACCT_FULL_BILL,
      Auth0AcctPermissions.ACCT_FULL_NEW_OWNER_RECEIPT,
      Auth0AcctPermissions.ACCT_FULL_OWNER_RECEIPT,
      Auth0AcctPermissions.ACCT_FULL_NEW_OTHER_RECEIPT,
      Auth0AcctPermissions.ACCT_FULL_OTHER_RECEIPT,
      Auth0AcctPermissions.ACCT_FULL_NEW_LEASE_CREDIT,
      Auth0AcctPermissions.ACCT_FULL_LEASE_CREDIT,
      Auth0AcctPermissions.ACCT_FULL_NEW_VENDOR_CREDIT,
      Auth0AcctPermissions.ACCT_FULL_VENDOR_CREDIT,
      Auth0AcctPermissions.ACCT_FULL_NEW_LEASE_PAYABLE,
      Auth0AcctPermissions.ACCT_FULL_LEASE_PAYABLE,
      Auth0AcctPermissions.ACCT_FULL_NEW_JOURNAL_ENTRY,
      Auth0AcctPermissions.ACCT_FULL_JOURNAL_ENTRY,
      Auth0AcctPermissions.ACCT_FULL_NEW_PROPERTY_TRANSFER,
      Auth0AcctPermissions.ACCT_FULL_SECURITY_DEPOSIT_TRANSFER,
      Auth0AcctPermissions.ACCT_FULL_PAY_BILLS,
      Auth0AcctPermissions.ACCT_FULL_PAY_MGNT_FEES,
      Auth0AcctPermissions.ACCT_FULL_PAY_OWNERS,
      Auth0AcctPermissions.ACCT_FULL_APPLY_LEASE_CREDIT,
      Auth0AcctPermissions.ACCT_FULL_OWNER_PACKET_LIST,
      Auth0AcctPermissions.ACCT_FULL_OWNER_PACKET_DETAIL,
      Auth0AcctPermissions.ACCT_FULL_MGNT_FEES_POLICY,
      Auth0AcctPermissions.ACCT_FULL_RECURRING_LIST,
      Auth0AcctPermissions.ACCT_FULL_RECURRING_DETAIL,
      Auth0AcctPermissions.ACCT_FULL_APPLICATION_CREDIT_DETAIL,
      Auth0AcctPermissions.ACCT_FULL_APPLICATION_RECEIPT_DETAIL,
      Auth0AcctPermissions.ACCT_FULL_APPLICATION_PAYABLE_DETAIL,

      Auth0AcctPermissions.ACCT_READ_AP_BATCH_LIST,
      Auth0AcctPermissions.ACCT_READ_AP_BATCH_DETAIL,
      Auth0AcctPermissions.ACCT_READ_ACCT_REPORTS,
      Auth0AcctPermissions.ACCT_READ_ACCOUNT_CHARTS,
      Auth0AcctPermissions.ACCT_READ_BANKING,
    ],

    [Auth0EmployeeRoles.ACCT_LIMITED_APPROVE]: [
      Auth0AcctPermissions.ACCT_FULL_TRANSACTIONS_TABLE,
      Auth0AcctPermissions.ACCT_FULL_NEW_CHARGE,
      Auth0AcctPermissions.ACCT_FULL_CHARGE,
      Auth0AcctPermissions.ACCT_FULL_NEW_DEPOSIT,
      Auth0AcctPermissions.ACCT_FULL_DEPOSIT,
      Auth0AcctPermissions.ACCT_FULL_NEW_RESIDENT_RECEIPT,
      Auth0AcctPermissions.ACCT_FULL_RESIDENT_RECEIPT,
      Auth0AcctPermissions.ACCT_FULL_NEW_BILL,
      Auth0AcctPermissions.ACCT_FULL_BILL,
      Auth0AcctPermissions.ACCT_FULL_NEW_OWNER_RECEIPT,
      Auth0AcctPermissions.ACCT_FULL_OWNER_RECEIPT,
      Auth0AcctPermissions.ACCT_FULL_NEW_OTHER_RECEIPT,
      Auth0AcctPermissions.ACCT_FULL_OTHER_RECEIPT,
      Auth0AcctPermissions.ACCT_FULL_NEW_LEASE_CREDIT,
      Auth0AcctPermissions.ACCT_FULL_LEASE_CREDIT,
      Auth0AcctPermissions.ACCT_FULL_NEW_VENDOR_CREDIT,
      Auth0AcctPermissions.ACCT_FULL_VENDOR_CREDIT,
      Auth0AcctPermissions.ACCT_FULL_NEW_LEASE_PAYABLE,
      Auth0AcctPermissions.ACCT_FULL_LEASE_PAYABLE,
      Auth0AcctPermissions.ACCT_FULL_NEW_JOURNAL_ENTRY,
      Auth0AcctPermissions.ACCT_FULL_JOURNAL_ENTRY,
      Auth0AcctPermissions.ACCT_FULL_NEW_PROPERTY_TRANSFER,
      Auth0AcctPermissions.ACCT_FULL_SECURITY_DEPOSIT_TRANSFER,
      Auth0AcctPermissions.ACCT_FULL_PAY_BILLS,
      Auth0AcctPermissions.ACCT_FULL_PAY_MGNT_FEES,
      Auth0AcctPermissions.ACCT_FULL_PAY_OWNERS,
      Auth0AcctPermissions.ACCT_FULL_APPLY_LEASE_CREDIT,
      Auth0AcctPermissions.ACCT_FULL_OWNER_PACKET_LIST,
      Auth0AcctPermissions.ACCT_FULL_OWNER_PACKET_DETAIL,
      Auth0AcctPermissions.ACCT_FULL_MGNT_FEES_POLICY,
      Auth0AcctPermissions.ACCT_FULL_RECURRING_LIST,
      Auth0AcctPermissions.ACCT_FULL_RECURRING_DETAIL,
      Auth0AcctPermissions.ACCT_FULL_APPLICATION_CREDIT_DETAIL,
      Auth0AcctPermissions.ACCT_FULL_APPLICATION_RECEIPT_DETAIL,
      Auth0AcctPermissions.ACCT_FULL_APPLICATION_PAYABLE_DETAIL,

      Auth0AcctPermissions.ACCT_READ_AP_BATCH_LIST,
      Auth0AcctPermissions.ACCT_FULL_AP_BATCH_DETAIL,
      Auth0AcctPermissions.ACCT_READ_ACCT_REPORTS,
      Auth0AcctPermissions.ACCT_READ_ACCOUNT_CHARTS,
      Auth0AcctPermissions.ACCT_READ_BANKING,
    ],

    // Other Admins
    [Auth0EmployeeRoles.ADMIN_USER]: [
      Auth0AcctPermissions.ACCT_FULL_ACCOUNT_CHARTS,
      Auth0AcctPermissions.ACCT_FULL_MGNT_FEES_POLICY,
      Auth0CorePermissions.CORE_FULL_SETTINGS,
      Auth0LeasingPermissions.LEASING_FULL_SETTINGS,
      Auth0MaintPermissions.MAINT_FULL_SETTINGS,
    ],

    // This doesnt match the spreadsheet anymore
    [Auth0PureOnlyRoles.ADMIN_LIMITED_TECH]: [
      Auth0AdminPermissions.ADMIN_FULL_CONFIGS,
      Auth0AdminPermissions.ADMIN_READ_CONFIGS,
      Auth0CorePermissions.CORE_FULL_SETTINGS,
    ],

    [Auth0PureOnlyRoles.SUPER_ADMIN]: [
      Auth0AcctPermissions.ACCT_FULL_ACCOUNT_CHARTS,
      Auth0AcctPermissions.ACCT_FULL_MGNT_FEES_POLICY,
      Auth0CorePermissions.CORE_FULL_SETTINGS,
      Auth0LeasingPermissions.LEASING_FULL_SETTINGS,
      Auth0MaintPermissions.MAINT_FULL_CONFIG,
      Auth0MaintPermissions.MAINT_FULL_SETTINGS,
      Auth0AdminPermissions.ADMIN_FULL_PORTAL_SETTINGS,
      Auth0AdminPermissions.ADMIN_FULL_ADMIN_USER,
      Auth0AdminPermissions.ADMIN_FULL_BRANCH,
      Auth0AdminPermissions.ADMIN_FULL_CORPORATION,
      Auth0AdminPermissions.ADMIN_FULL_DIVISION,
      Auth0AdminPermissions.ADMIN_FULL_PERMISSION,
      Auth0AdminPermissions.ADMIN_FULL_PERSON,
      Auth0AdminPermissions.ADMIN_FULL_PERSONA,
      Auth0AdminPermissions.ADMIN_FULL_ROLE,

      Auth0AdminPermissions.ADMIN_READ_BRANCH,
      Auth0AdminPermissions.ADMIN_READ_CORPORATION,
      Auth0AdminPermissions.ADMIN_READ_DIVISION,
      Auth0AdminPermissions.ADMIN_READ_PERMISSION,
      Auth0AdminPermissions.ADMIN_READ_PERSON,
      Auth0AdminPermissions.ADMIN_READ_PERSONA,
      Auth0AdminPermissions.ADMIN_READ_ROLE,

      Auth0AdminPermissions.ADMIN_READ_ALL,
      Auth0AdminPermissions.ADMIN_WRITE_ALL,
    ],

    // Customers
    [Auth0CustomerRoles.RESIDENT]: [
      Auth0PortalPermissions.PORTAL_READ_RESIDENT_PORTAL,
    ],
    [Auth0CustomerRoles.OWNER]: [
      Auth0PortalPermissions.PORTAL_READ_OWNER_PORTAL,
    ],
  };
};

export const getApiPermissionsMap = () => {
  return {
    [Auth0Apis.USER_API_CFO_DASH]: [...Object.values(Auth0CFOPermissions)],
    [Auth0Apis.USER_API_PLATFORM]: [
      ...Object.values(Auth0Permissions),
      ...Object.values(Auth0AcctPermissions),
      ...Object.values(Auth0CorePermissions),
      ...Object.values(Auth0CommsPermissions),
      ...Object.values(Auth0PortalPermissions),
      ...Object.values(Auth0LeasingPermissions),
      ...Object.values(Auth0MaintPermissions),
      ...Object.values(Auth0AdminPermissions),
      ...Object.values(Auth0M2MPermissions_Platform_Internal), // TODO: remove this once I figure out that we can correctly verify tokens with different audience in our middleware
    ],
    [Auth0Apis.M2M_API_EXTERNAL]: [
      ...Object.values(Auth0M2MPermissions_Platform_External),
    ],
    [Auth0Apis.M2M_API_INTERNAL]: [
      ...Object.values(Auth0Permissions),
      ...Object.values(Auth0AcctPermissions),
      ...Object.values(Auth0CorePermissions),
      ...Object.values(Auth0CommsPermissions),
      ...Object.values(Auth0PortalPermissions),
      ...Object.values(Auth0LeasingPermissions),
      ...Object.values(Auth0MaintPermissions),
      ...Object.values(Auth0AdminPermissions),
      ...Object.values(Auth0M2MPermissions_Platform_Internal),
    ],
  };
};

// TODO: write  tests for this
export const getPermissionsForApi = (api_id: Auth0Apis) => {
  const api_permission_map = getApiPermissionsMap();
  const key = api_id as keyof typeof api_permission_map;
  const permissions = api_permission_map[key];
  return permissions;
};
