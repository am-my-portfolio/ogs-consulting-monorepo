export enum PureOnlyPersona {
  // Corporate Level Employees
  PURE_SUPER_ADMIN = 'Pure Super Admin',

  // Brnad Level Employees
  TECH_TEAM_GENERAL = 'Tech Team General',
}

export enum GeneralPersona {
  // Corporate Level Employees
  OPERATIONS_ADMIN = 'Operations Administrator',

  // Branch Level Employees
  PROPERTY_MANAGER = 'Property Manager', // Default
  BRANCH_MANAGER = 'Branch Manager',
  BRANCH_ACCOUNTANT = 'Branch Accountant',
  LEASING_SPECIALIST = 'Leasing Specialist',
  MAINT_COORDINATOR = 'Maintenance Coordinator',

  // Special
  LEAST_PRIVILEGED_PERSONA = 'Least Privileged Default Persona',
}

export enum CustomerPersona {
  RESIDENT = 'Resident',
  OWNER = 'Owner', // it represents the owner contact (a person) not the Owner or Ownership Group (which could be person, group of persons, or companies)
}

export const AllPersonas = {
  ...PureOnlyPersona,
  ...GeneralPersona,
  ...CustomerPersona,
};
export type AllPersonas = PureOnlyPersona | GeneralPersona | CustomerPersona;
