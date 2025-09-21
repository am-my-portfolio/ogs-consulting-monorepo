export enum Auth0Permissions {
  LEAST_PRIVILEGE = 'core:least:privilege',
}

// B2B or M2MP Permissions (Not Decided by the Product)
// these are added to the auth0 m2m platform api for external/3rd parties
// https://manage.auth0.com/dashboard/us/pure-develop/apis/661d82e01ba1b9381c021b1a/settings
// See https://purepm.atlassian.net/wiki/spaces/puredocs/pages/735215787/B2B+or+M2M+Authorization+OAuth+2.0
export enum Auth0M2MPermissions_Platform_External {
  POST_ACCT_NS_EVENTS = 'acct:post:netsuite-events', // Netsuite callback
  POST_SENDGRID_EVENTS = 'comms:post:sendgrid-events', // Sendgrid callback

  POST_BACKGROUND_CHECK = 'post:background-check', // transunion background check callback // TODO: delete this
}

// B2B or M2MP Permissions (Not Decided by the Product)
// these are added to the auth0 m2m platform api for internal IPC
// https://manage.auth0.com/dashboard/us/pure-develop/apis/661d83051840972db94c0775/settings
// See https://purepm.atlassian.net/wiki/spaces/puredocs/pages/735215787/B2B+or+M2M+Authorization+OAuth+2.0
export enum Auth0M2MPermissions_Platform_Internal {
  ACCT_POST_BALANCE_SYNC = 'acct:post:balance-sync',
  ACCT_POST_SCHEDULER_EVENTS = 'acct:post:scheduler-events',
  ACCT_FULL_TRANSACTIONS = 'acct:full:transactions',

  CORE_FULL_TRANSACTIONS = 'core:full:transactions',
  CORE_DOCUMENT_CRUD = 'core:document:crud',

  MAINT_FULL_ENTITIES = 'maint:full:entities',

  LEASING_FULL_APPLICANT_STATUS = 'leasing:full:applicant-status',

  COMMS_FULL_TRANSACTIONS = 'comms:full:transactions',

  ADMIN_FULL_E2E = 'admin:full:e2e',

  // TODO: remove them
  ACCT_FULL_E2E = 'acct:full:e2e',
  CORE_FULL_E2E = 'core:full:e2e',
  MAINT_FULL_E2E = 'maint:full:e2e',
  LEASING_FULL_E2E = 'leasing:full:e2e',
  COMMS_FULL_E2E = 'comms:full:e2e',
}

// Application/User Level Permissions (Mostly Decided by the Product)
export enum Auth0AcctPermissions {
  // FULL
  ACCT_FULL_TRANSACTIONS_TABLE = 'acct:full:transactions-table',
  ACCT_FULL_NEW_CHARGE = 'acct:full:new-charge',
  ACCT_FULL_CHARGE = 'acct:full:charge',
  ACCT_FULL_NEW_DEPOSIT = 'acct:full:new-deposit',
  ACCT_FULL_DEPOSIT = 'acct:full:deposit',
  ACCT_FULL_NEW_RESIDENT_RECEIPT = 'acct:full:new-resident-receipt',
  ACCT_FULL_RESIDENT_RECEIPT = 'acct:full:resident-receipt',
  ACCT_FULL_NEW_BILL = 'acct:full:new-bill',
  ACCT_FULL_BILL = 'acct:full:bill',
  ACCT_FULL_NEW_OWNER_RECEIPT = 'acct:full:new-owner-receipt',
  ACCT_FULL_OWNER_RECEIPT = 'acct:full:owner-receipt',
  ACCT_FULL_NEW_OTHER_RECEIPT = 'acct:full:new-other-receipt',
  ACCT_FULL_OTHER_RECEIPT = 'acct:full:other-receipt',
  ACCT_FULL_NEW_LEASE_CREDIT = 'acct:full:new-lease-credit',
  ACCT_FULL_LEASE_CREDIT = 'acct:full:lease-credit',
  ACCT_FULL_NEW_VENDOR_CREDIT = 'acct:full:new-vendor-credit',
  ACCT_FULL_VENDOR_CREDIT = 'acct:full:vendor-credit',
  ACCT_FULL_NEW_LEASE_PAYABLE = 'acct:full:new-lease-payable',
  ACCT_FULL_LEASE_PAYABLE = 'acct:full:lease-payable',
  ACCT_FULL_NEW_JOURNAL_ENTRY = 'acct:full:new-journal-entry',
  ACCT_FULL_JOURNAL_ENTRY = 'acct:full:journal-entry',
  ACCT_FULL_NEW_PROPERTY_TRANSFER = 'acct:full:new-property-transfer',
  ACCT_FULL_SECURITY_DEPOSIT_TRANSFER = 'acct:full:security-deposit-transfer',
  ACCT_FULL_PAY_BILLS = 'acct:full:pay-bills',
  ACCT_FULL_PAY_MGNT_FEES = 'acct:full:pay-mgnt-fees',
  ACCT_FULL_PAY_OWNERS = 'acct:full:pay-owners',
  ACCT_FULL_APPLY_LEASE_CREDIT = 'acct:full:apply-lease-credit',
  ACCT_FULL_REAPPLY_LEASE_CREDIT = 'acct:full:reapply-lease-credit',
  ACCT_FULL_AP_BATCH_DETAIL = 'acct:full:ap-batch-detail',
  ACCT_FULL_OWNER_PACKET_LIST = 'acct:full:owner-packet-list',
  ACCT_FULL_OWNER_PACKET_DETAIL = 'acct:full:owner-packet-detail',
  ACCT_FULL_ACCOUNT_CHARTS = 'acct:full:account-charts',
  ACCT_FULL_MGNT_FEES_POLICY = 'acct:full:mgnt-fees-policy',
  ACCT_FULL_RECURRING_LIST = 'acct:full:recurring-list',
  ACCT_FULL_RECURRING_DETAIL = 'acct:full:recurring-detail',
  ACCT_FULL_APPLICATION_CREDIT_DETAIL = 'acct:full:application-credit-detail',
  ACCT_FULL_APPLICATION_RECEIPT_DETAIL = 'acct:full:application-receipt-detail',
  ACCT_FULL_APPLICATION_PAYABLE_DETAIL = 'acct:full:application-payable-detail',

  // Post mvp
  ACCT_FULL_PAY_TAXES = 'acct:pay:pay-taxes',
  ACCT_FULL_POSITIVE_PAY = 'acct:full:positive-pay',
  ACCT_RECONCILE_RECONCILIATION = 'acct:reconcile:reconciliation',

  // READ
  ACCT_READ_TRANSACTIONS_TABLE = 'acct:read:transactions-table',
  ACCT_READ_CHARGE = 'acct:read:charge',
  ACCT_READ_DEPOSIT = 'acct:read:deposit',
  ACCT_READ_RESIDENT_RECEIPT = 'acct:read:resident-receipt',
  ACCT_READ_BILL = 'acct:read:bill',
  ACCT_READ_OWNER_RECEIPT = 'acct:read:owner-receipt',
  ACCT_READ_OTHER_RECEIPT = 'acct:read:other-receipt',
  ACCT_READ_LEASE_CREDIT = 'acct:read:lease-credit',
  ACCT_READ_VENDOR_CREDIT = 'acct:read:vendor-credit',
  ACCT_READ_LEASE_PAYABLE = 'acct:read:lease-payable',
  ACCT_READ_JOURNAL_ENTRY = 'acct:read:journal-entry',
  ACCT_READ_AP_BATCH_LIST = 'acct:read:ap-batch-list',
  ACCT_READ_AP_BATCH_DETAIL = 'acct:read:ap-batch-detail',
  ACCT_READ_ACCT_REPORTS = 'acct:read:acct-reports',
  ACCT_READ_OWNER_PACKET_LIST = 'acct:read:owner-packet-list',
  ACCT_READ_OWNER_PACKET_DETAIL = 'acct:read:owner-packet-detail',
  ACCT_READ_ACCOUNT_CHARTS = 'acct:read:account-charts',
  ACCT_READ_MGNT_FEES_POLICY = 'acct:read:mgnt-fees-policy',
  ACCT_READ_RECURRING_LIST = 'acct:read:recurring-list',
  ACCT_READ_RECURRING_DETAIL = 'acct:read:recurring-detail',
  ACCT_READ_BANKING = 'acct:read:banking',
  ACCT_READ_APPLICATION_CREDIT_DETAIL = 'acct:read:application-credit-detail',
  ACCT_READ_APPLICATION_RECEIPT_DETAIL = 'acct:read:application-receipt-detail',
  ACCT_READ_APPLICATION_PAYABLE_DETAIL = 'acct:read:application-payable-detail',

  // post mvp
  ACCT_READ_POSITIVE_PAY = 'acct:read:positive-pay',
}

export enum Auth0CorePermissions {
  // FULL
  CORE_FULL_CORPORATION_REPORTS = 'core:full:corporation-reports',
  CORE_FULL_DIVISION_REPORTS = 'core:full:division-reports',
  CORE_FULL_VENDOR_DOCUMENTS = 'core:full:vendor-documents',
  CORE_FULL_OWNER_DOCUMENTS = 'core:full:owner-documents',
  CORE_FULL_ONLINE_PAYMENTS = 'core:full:online-payments',
  CORE_FULL_COFFEE_HUB = 'core:full:coffee-hub',
  CORE_FULL_COMMS_HUB = 'core:full:comms-hub',
  CORE_FULL_PROJECT_HUB = 'core:full:project-hub',
  CORE_FULL_PROPERTIES_LIST = 'core:full:properties-list',
  CORE_FULL_PROPERTY_PROFILE = 'core:full:property-profile',
  CORE_FULL_RESIDENTS_LIST = 'core:full:residents-list',
  CORE_FULL_RESIDENT_PROFILE = 'core:full:resident-profile',
  CORE_FULL_OWNERSHIP_LIST = 'core:full:ownership-list',
  CORE_FULL_OWNERSHIP_GROUP_PROFILE = 'core:full:ownership-group-profile',
  CORE_FULL_OWNER_PROFILE = 'core:full:owner-profile',
  CORE_FULL_VENDORS_LIST = 'core:full:vendors-list',
  CORE_FULL_VENDOR_PROFILE = 'core:full:vendor-profile',
  CORE_FULL_FEDERAL_ID = 'core:full:federal-id',
  CORE_FULL_BANK_ID = 'core:full:bank-id',
  CORE_FULL_NOTES = 'core:full:notes',
  CORE_FULL_DOCUMENTS = 'core:full:documents',
  CORE_FULL_DOCUMENT = 'core:full:document',
  CORE_FULL_PROPERTY_ONBOARDING = 'core:full:property-onboarding',
  CORE_FULL_OWNER_ONBOARDING = 'core:full:owner-onboarding',
  CORE_FULL_OWNERSHIP_GROUP_ONBOARDING = 'core:full:ownership-group-onboarding',
  CORE_FULL_VENDOR_ONBOARDING = 'core:full:vendor-onboarding',
  CORE_FULL_PROPERTY_REPORTS = 'core:full:property-reports',
  CORE_FULL_RESIDENT_REPORTS = 'core:full:resident-reports',
  CORE_FULL_OWNER_REPORTS = 'core:full:owner-reports',
  CORE_FULL_DASHBOARD = 'core:full:dashboard',
  CORE_FULL_SETTINGS = 'core:full:settings',
  CORE_FULL_BRANCH_TAGS = 'core:full:branch-tags',
  CORE_FULL_GLOBAL_TAGS = 'core:full:global-tags',

  // MISC WRITE
  CORE_SEND_BULK_EMAIL = 'core:send:bulk-email',
  CORE_SEND_PORTAL_INVITE = 'core:send:portal-invite',

  // READ
  CORE_READ_CORPORATION_REPORTS = 'core:read:corporation-reports',
  CORE_READ_DIVISION_REPORTS = 'core:read:division-reports',
  CORE_READ_VENDOR_DOCUMENTS = 'core:read:vendor-documents',
  CORE_READ_OWNER_DOCUMENTS = 'core:read:owner-documents',
  CORE_READ_ONLINE_PAYMENTS = 'core:read:online-payments',
  CORE_READ_COFFEE_HUB = 'core:read:coffee-hub',
  CORE_READ_COMMS_HUB = 'core:read:comms-hub',
  CORE_READ_PROJECT_HUB = 'core:read:project-hub',
  CORE_READ_PROPERTIES_LIST = 'core:read:properties-list',
  CORE_READ_PROPERTY_PROFILE = 'core:read:property-profile',
  CORE_READ_RESIDENTS_LIST = 'core:read:residents-list',
  CORE_READ_RESIDENT_PROFILE = 'core:read:resident-profile',
  CORE_READ_OWNERSHIP_LIST = 'core:read:ownership-list',
  CORE_READ_OWNERSHIP_GROUP_PROFILE = 'core:read:ownership-group-profile',
  CORE_READ_OWNER_PROFILE = 'core:read:owner-profile',
  CORE_READ_VENDORS_LIST = 'core:read:vendors-list',
  CORE_READ_VENDOR_PROFILE = 'core:read:vendor-profile',
  CORE_READ_FEDERAL_ID = 'core:read:federal-id',
  CORE_READ_BANK_ID = 'core:read:bank-id',
  CORE_READ_NOTES = 'core:read:notes',
  CORE_READ_DOCUMENTS = 'core:read:documents',
  CORE_READ_OWNER_ONBOARDING = 'core:read:owner-onboarding',
  CORE_READ_OWNERSHIP_GROUP_ONBOARDING = 'core:read:ownership-group-onboarding',
  CORE_READ_VENDOR_ONBOARDING = 'core:read:vendor-onboarding',
  CORE_READ_PROPERTY_REPORTS = 'core:read:property-reports',
  CORE_READ_RESIDENT_REPORTS = 'core:read:resident-reports',
  CORE_READ_OWNER_REPORTS = 'core:read:owner-reports',
  CORE_READ_DASHBOARD = 'core:read:dashboard',
  CORE_READ_SETTINGS = 'core:read:settings',
  CORE_READ_PROPERTY_ONBOARDING = 'core:read:property-onboarding',
  CORE_READ_BULK_EMAIL = 'core:read:bulk-email',
  CORE_READ_PORTAL_INVITE = 'core:read:portal-invite',
  CORE_READ_BRANCH_TAGS = 'core:read:branch-tags',
  CORE_READ_GLOBAL_TAGS = 'core:read:global-tags',
}

export enum Auth0CommsPermissions {
  COMMS_FULL_TEMPLATE_MANAGER = 'comms:full:template-manager',
  COMMS_READ_TEMPLATE_MANAGER = 'comms:read:template-manager',
}

export enum Auth0PortalPermissions {
  // FULL
  PORTAL_FULL_OWNER_PORTAL = 'portal:full:owner-portal',
  PORTAL_FULL_RESIDENT_PORTAL = 'portal:full:resident-portal',
  PORTAL_FULL_VENDOR_PORTAL = 'portal:full:vendor-portal',

  // READ
  PORTAL_READ_OWNER_PORTAL = 'portal:read:owner-portal',
  PORTAL_READ_RESIDENT_PORTAL = 'portal:read:resident-portal',
  PORTAL_READ_VENDOR_PORTAL = 'portal:read:vendor-portal',
}

export enum Auth0LeasingPermissions {
  // FULL
  LEASING_FULL_LEASING_PROFILE = 'leasing:full:leasing-profile',
  LEASING_FULL_APPLICATIONS_LIST = 'leasing:full:applications-list',
  LEASING_FULL_APPLICANT_DETAILS = 'leasing:full:applicant-details',
  LEASING_FULL_APPLICATIONS_GROUP_DETAILS = 'leasing:full:applications-group-details',
  LEASING_FULL_APPLICANT_VERIFICATION = 'leasing:full:applicant-verification',
  LEASING_FULL_APPLICANT_SSN = 'leasing:full:applicant-ssn',
  LEASING_FULL_APPLICANT_DOCUMENTS = 'leasing:full:applicant-documents',
  LEASING_FULL_BACKGROUND_CHECK_REPORT = 'leasing:full:background-check-report',
  LEASING_FULL_MOVE_IN_ONBOARDING = 'leasing:full:move-in-onboarding',
  LEASING_FULL_MOVE_OUT_ONBOARDING = 'leasing:full:move-out-onboarding',
  LEASING_FULL_RENEWAL_ONBOARDING = 'leasing:full:renewal-onboarding',
  LEASING_FULL_REPORTS = 'leasing:full:reports',
  LEASING_FULL_SETTINGS = 'leasing:full:settings',

  // MISC WRITE
  LEASING_SIGN_DOCUSIGN_COUNTER_SIGN = 'leasing:sign:docusign-counter-sign',

  // READ
  LEASING_READ_LEASING_PROFILE = 'leasing:read:leasing-profile',
  LEASING_READ_APPLICATIONS_LIST = 'leasing:read:applications-list',
  LEASING_READ_APPLICANT_DETAILS = 'leasing:read:applicant-details',
  LEASING_READ_APPLICATIONS_GROUP_DETAILS = 'leasing:read:applications-group-details',
  LEASING_READ_APPLICANT_VERIFICATION = 'leasing:read:applicant-verification',
  LEASING_READ_APPLICANT_SSN = 'leasing:read:applicant-ssn',
  LEASING_READ_APPLICANT_DOCUMENTS = 'leasing:read:applicant-documents',
  LEASING_READ_BACKGROUND_CHECK_REPORT = 'leasing:read:background-check-report',
  LEASING_READ_MOVE_IN_ONBOARDING = 'leasing:read:move-in-onboarding',
  LEASING_READ_MOVE_OUT_ONBOARDING = 'leasing:read:move-out-onboarding',
  LEASING_READ_RENEWAL_ONBOARDING = 'leasing:read:renewal-onboarding',
  LEASING_READ_REPORTS = 'leasing:read:reports',
  LEASING_READ_SETTINGS = 'leasing:read:settings',
  LEASING_READ_DOCUSIGN_COUNTER_SIGN = 'leasing:read:docusign-counter-sign',
}

export enum Auth0MaintPermissions {
  // FULL
  MAINT_FULL_LIST = 'maint:full:list',
  MAINT_FULL_WORK_ORDER = 'maint:full:work-order',
  MAINT_FULL_CONFIG = 'maint:full:config',
  MAINT_FULL_SETTINGS = 'maint:full:settings',
  MAINT_FULL_CRUD = 'maint:full:crud', // TODO: delete it from here when the m2m overhaul happens

  // READ
  MAINT_READ_LIST = 'maint:read:list',
  MAINT_READ_WORK_ORDER = 'maint:read:work-order',
  MAINT_READ_CONFIG = 'maint:read:config',
  MAINT_READ_SETTINGS = 'maint:read:settings',
}

// Admin Portal Only
export enum Auth0AdminPermissions {
  // FULL
  ADMIN_FULL_BRANCH_SETTINGS = 'admin:full:branch-settings',
  ADMIN_FULL_DIVISION_SETTINGS = 'admin:full:division-settings',
  ADMIN_FULL_CORPORATE_SETTINGS = 'admin:full:corporate-settings',
  ADMIN_FULL_GLOBAL_ACCT_SETTINGS = 'admin:full:global-acct-settings',
  ADMIN_FULL_PORTAL_SETTINGS = 'admin:full:portal-settings',

  ADMIN_FULL_CONFIGS = 'admin:full:configs',
  ADMIN_FULL_PORTAL_USER = 'admin:full:portal-user',
  ADMIN_FULL_PERSONS_LIST = 'admin:full:persons-list',
  ADMIN_FULL_CFO_DASH = 'admin:full:cfo-dash',

  ADMIN_FULL_PERSON = 'admin:full:person',
  ADMIN_FULL_ADMIN_USER = 'admin:full:admin-user',
  ADMIN_FULL_CORPORATION = 'admin:full:corporation',
  ADMIN_FULL_DIVISION = 'admin:full:division',
  ADMIN_FULL_BRANCH = 'admin:full:branch',
  ADMIN_FULL_PERSONA = 'admin:full:persona',
  ADMIN_FULL_ROLE = 'admin:full:role',
  ADMIN_FULL_PERMISSION = 'admin:full:permission',

  // READ
  ADMIN_READ_BRANCH_SETTINGS = 'admin:read:branch-settings',
  ADMIN_READ_DIVISION_SETTINGS = 'admin:read:division-settings',
  ADMIN_READ_CORPORATE_SETTINGS = 'admin:read:corporate-settings',
  ADMIN_READ_GLOBAL_ACCT_SETTINGS = 'admin:read:global-acct-settings',
  ADMIN_READ_PORTAL_SETTINGS = 'admin:read:portal-settings',

  ADMIN_READ_CONFIGS = 'admin:read:configs',
  ADMIN_READ_PORTAL_USER = 'admin:read:portal-user',
  ADMIN_READ_PERSONS_LIST = 'admin:read:persons-list',
  ADMIN_READ_CFO_DASH = 'admin:read:cfo-dash',

  ADMIN_READ_PERSON = 'admin:read:person',
  ADMIN_READ_ADMIN_USER = 'admin:read:admin-user',
  ADMIN_READ_CORPORATION = 'admin:read:corporation',
  ADMIN_READ_DIVISION = 'admin:read:division',
  ADMIN_READ_BRANCH = 'admin:read:branch',
  ADMIN_READ_PERSONA = 'admin:read:persona',
  ADMIN_READ_ROLE = 'admin:read:role',
  ADMIN_READ_PERMISSION = 'admin:read:permission',

  // Special (Not Decided by the Product)
  ADMIN_WRITE_ALL = 'admin:write:all',
  ADMIN_READ_ALL = 'admin:read:all',
}

export enum Auth0CFOPermissions {
  CFO_VIEW = 'cfo:view', // Access to read data from API and view dashboard and form in ui
  CFO_EDIT = 'cfo:edit', // Grants basic edit of input form. Time restrictions apply.
  CFO_EDIT_UNLIMITED = 'cfo:edit:unlimited', // Grants edit to input form without any time restrictions applied.
}

export type AllPermissions =
  | Auth0Permissions
  | Auth0M2MPermissions_Platform_External
  | Auth0M2MPermissions_Platform_Internal
  | Auth0AcctPermissions
  | Auth0CorePermissions
  | Auth0CommsPermissions
  | Auth0PortalPermissions
  | Auth0LeasingPermissions
  | Auth0MaintPermissions
  | Auth0AdminPermissions
  | Auth0CFOPermissions;

export const AllPermissions = {
  ...Auth0Permissions,
  ...Auth0M2MPermissions_Platform_External,
  ...Auth0M2MPermissions_Platform_Internal,
  ...Auth0AcctPermissions,
  ...Auth0CorePermissions,
  ...Auth0CommsPermissions,
  ...Auth0PortalPermissions,
  ...Auth0LeasingPermissions,
  ...Auth0MaintPermissions,
  ...Auth0AdminPermissions,
  ...Auth0CFOPermissions,
};
