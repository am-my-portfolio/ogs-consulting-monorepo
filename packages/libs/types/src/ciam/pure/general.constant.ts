export enum UserType {
  EMPLOYEE = 'Employee',
  CUSTOMER = 'Customer',
}

export enum CustomerType {
  RESIDENT = 'Resident',
  OWNER = 'Owner',
  OWNER_CONTACT = 'Owner Contact',
  VENDOR = 'Vendor',
}

export enum UserLevel {
  CORPORATE = 'Corporation',
  DIVISION = 'Division',
  BRAND = 'Brand',
}

export enum CorporationCategory {
  PURE = 'Pure',
  GENERAL = 'General',
  REAL = 'Real',
  TEST = 'Test',
  CUTOVER = 'Cutover',
}

export enum JwtIssuerType {
  AUTH0 = 'auth0',
  GOOGLE = 'google',
}
