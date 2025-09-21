export const Auth0Algorithm = 'RS256';

export enum Auth0ConnectionType {
  ENTERPRISE_GOOGLE_WS = 'Google Workspace',
  PASSWORDLESS_EMAIL = 'email',
}

export enum Auth0TemplateType {
  USER_INVITATION = 'user_invitation',

  // Not in Scope
  // WELCOME_EMAIL = 'welcome_email',
  // BLOCKED_ACCOUNT = 'blocked_account',
  // MFA_OOB_CODE = 'mfa_oob_code',
  // VERIFY_EMAIL = 'verify_email',
  // VERIFY_EMAIL_BY_CODE = 'verify_email_by_code',
  // RESET_EMAIL = 'reset_email',
  // STOLEN_CREDENTIALS = 'stolen_credentials',
  // ENROLLMENT_EMAIL = 'enrollment_email',
  // CHANGE_PASSWORD = 'change_password',
  // PASSWORD_RESET = 'password_reset',
}

// These values determine what Audience will be used for issuing and validation of the m2m token
export enum Auth0Apis {
  USER_API_CFO_DASH = 'cfo-dashboard',
  USER_API_PLATFORM = 'user-platform', // This is the single logical api https://manage.auth0.com/dashboard/us/pure-develop/apis/62b363fa57313c0044a720f6/settings
  M2M_API_EXTERNAL = 'm2m-external', // https://manage.auth0.com/dashboard/us/pure-develop/apis/661d82e01ba1b9381c021b1a/permissions
  M2M_API_INTERNAL = 'm2m-internal', // https://manage.auth0.com/dashboard/us/pure-develop/apis/661d83051840972db94c0775/settings
}

// IMPORTANT: the 2nd word in the value is special (e.g the values PM, Admin, Investor)
// the lowercase version of it becomes the sub-domain in the URL of the portal when deployed
export enum Auth0SinglePageApps {
  PMHUB = 'PURE PM Hub',
  LEASING_PORTAL = 'PURE Leasing Portal',
  ADMIN_PORTAL = 'PURE Admin Portal',
  INVESTOR_PORTAL = 'PURE Investor Portal',
  RESIDENT_PORTAL = 'PURE Resident Portal',
  VENDOR_PORTAL = 'PURE Vendor Portal',
  TEMPLATE_APP = 'PURE Template Portal',
  // SPA_TEMPLATE = 'PURE Spa Template',
}

// These values determine what client id/secret will be used in the m2m token
export enum Auth0M2MAppsExternal {
  M2M_APP_SENDGRID = 'm2m-app:external-sendgrid',
  M2M_APP_TRANSUNION = 'm2m-app:external-transunion', // TODO: delete this, will use api-key for the TU callback
  M2M_APP_NETSUITE = 'm2m-app:external-netsuite',
}

// These values determine what client id/secret will be used in the m2m token
export enum Auth0M2MAppsInternal {
  M2M_APP_ACCT = 'm2m-app:accounting-service',
  M2M_APP_ADMIN = 'm2m-app:admin-service',
  M2M_APP_COMMS = 'm2m-app:comms-service',
  M2M_APP_CORE = 'm2m-app:core-service',
  M2M_APP_DMS = 'm2m-app:dms-service',
  M2M_APP_EMAIL = 'm2m-app:email-service',
  // M2M_APP_JOBS_ENGINE = 'm2m-app:jobs-engine-service',
  M2M_APP_LEASING = 'm2m-app:leasing-service',
  M2M_APP_MAINT = 'm2m-app:maint-service',
  M2M_APP_OWNER = 'm2m-app:owner-service',
  M2M_APP_PM = 'm2m-app:pm-service',
  M2M_APP_REPORTING = 'm2m-app:reporting-service',
  M2M_AUTH0_MGNT_APP = 'm2m-app:auth0-mgmt-api',
}

export enum Auth0M2MAppsTest {
  M2M_APP_TEST_COMPANY_7 = 'm2m-app:testcompany7',
  M2M_APP_TEST_COMPANY_8 = 'm2m-app:testcompany8',
}

export type Auth0M2MApps =
  | Auth0M2MAppsInternal
  | Auth0M2MAppsExternal
  | Auth0M2MAppsTest;
export const Auth0M2MApps = {
  ...Auth0M2MAppsInternal,
  ...Auth0M2MAppsExternal,
  ...Auth0M2MAppsTest,
};
