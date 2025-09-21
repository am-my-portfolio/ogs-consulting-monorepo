import {
  Auth0EmployeeRoles,
  Auth0CustomerRoles,
  Auth0PureOnlyRoles,
  CustomerPersona,
  GeneralPersona,
  AllPersonas,
  UserLevel,
  AllRoles,
  Auth0TestRoles,
} from '@am-ogs/types';

export const getPersonaRoleMap = () => {
  return {
    // Corporate Level
    [AllPersonas.PURE_SUPER_ADMIN]: [
      Auth0EmployeeRoles.CORE_USER,
      Auth0EmployeeRoles.LEASING_USER,
      Auth0EmployeeRoles.ACCT_USER,
      Auth0EmployeeRoles.GLOBAL_CONTENT_MANAGER,
      Auth0PureOnlyRoles.SUPER_ADMIN,
    ],

    // Corporate Level Property Management Operations
    [AllPersonas.OPERATIONS_ADMIN]: [
      Auth0EmployeeRoles.CORE_USER,
      Auth0EmployeeRoles.LEASING_USER,
      Auth0EmployeeRoles.ACCT_USER,
      Auth0EmployeeRoles.ADMIN_USER,
      Auth0EmployeeRoles.GLOBAL_CONTENT_MANAGER,
    ],

    // Branch Operations
    [AllPersonas.PROPERTY_MANAGER]: [
      Auth0EmployeeRoles.CORE_USER,
      Auth0EmployeeRoles.LEASING_USER,
      Auth0EmployeeRoles.ACCT_USER,
      Auth0EmployeeRoles.BRAND_CONTENT_MANAGER,
    ],
    [AllPersonas.BRANCH_MANAGER]: [
      Auth0EmployeeRoles.CORE_USER,
      Auth0EmployeeRoles.LEASING_USER,
      Auth0EmployeeRoles.ACCT_LIMITED_APPROVE,
      Auth0EmployeeRoles.BRAND_CONTENT_MANAGER,
    ],
    [AllPersonas.BRANCH_ACCOUNTANT]: [
      Auth0EmployeeRoles.CORE_USER,
      Auth0EmployeeRoles.LEASING_USER,
      Auth0EmployeeRoles.ACCT_USER,
      Auth0EmployeeRoles.BRAND_CONTENT_MANAGER,
    ],
    [AllPersonas.LEASING_SPECIALIST]: [
      Auth0EmployeeRoles.CORE_USER,
      Auth0EmployeeRoles.LEASING_USER,
      Auth0EmployeeRoles.BRAND_CONTENT_MANAGER,
    ],
    [AllPersonas.MAINT_COORDINATOR]: [
      Auth0EmployeeRoles.CORE_LIMITED,
      Auth0EmployeeRoles.BRAND_CONTENT_MANAGER,
    ],

    // Brand Level Special
    [AllPersonas.LEAST_PRIVILEGED_PERSONA]: [Auth0TestRoles.LEAST_PRIVILEGE],

    [AllPersonas.TECH_TEAM_GENERAL]: [
      // TODO: this might need to be updated
      Auth0EmployeeRoles.CORE_USER,
      Auth0EmployeeRoles.LEASING_USER,
      Auth0EmployeeRoles.ACCT_USER,
      Auth0EmployeeRoles.GLOBAL_CONTENT_MANAGER,
      Auth0PureOnlyRoles.ADMIN_LIMITED_TECH,
    ],

    // Brand Level Customers
    [AllPersonas.RESIDENT]: [Auth0CustomerRoles.RESIDENT],
    [AllPersonas.OWNER]: [Auth0CustomerRoles.OWNER],
  };
};

export const getUserLevelPersonaMap_Pure = () => {
  return {
    [UserLevel.CORPORATE]: [
      AllPersonas.PURE_SUPER_ADMIN,
      AllPersonas.OPERATIONS_ADMIN,
    ],
    [UserLevel.DIVISION]: [],

    [UserLevel.BRAND]: [
      AllPersonas.PROPERTY_MANAGER,
      AllPersonas.BRANCH_MANAGER,
      AllPersonas.BRANCH_ACCOUNTANT,
      AllPersonas.LEASING_SPECIALIST,
      AllPersonas.MAINT_COORDINATOR,
      AllPersonas.RESIDENT,
      AllPersonas.OWNER,
      AllPersonas.TECH_TEAM_GENERAL,
      AllPersonas.LEAST_PRIVILEGED_PERSONA,
    ],
  };
};

export const getUserLevelPersonaMap_NonPure = () => {
  return {
    [UserLevel.CORPORATE]: [AllPersonas.OPERATIONS_ADMIN],

    [UserLevel.DIVISION]: [],

    [UserLevel.BRAND]: [
      AllPersonas.PROPERTY_MANAGER,
      AllPersonas.BRANCH_MANAGER,
      AllPersonas.BRANCH_ACCOUNTANT,
      AllPersonas.LEASING_SPECIALIST,
      AllPersonas.MAINT_COORDINATOR,
      AllPersonas.RESIDENT,
      AllPersonas.OWNER,
      AllPersonas.LEAST_PRIVILEGED_PERSONA,
    ],
  };
};

// Pure Corporation has access to all AllPersonas, including some special ones
export const getPersonaList = (): AllPersonas[] => {
  return Object.values(AllPersonas);
};

// All corporations other than Pure corp, will have this list of Persons
export const getGeneralPersonaList = (): Array<
  GeneralPersona | CustomerPersona
> => {
  return [...Object.values(GeneralPersona), ...Object.values(CustomerPersona)];
};

// This returns just the Customer personas
export const getCustomerPersonaList = (): CustomerPersona[] => {
  return Object.values(CustomerPersona);
};

export const getRolesForPersona = (persona: AllPersonas) => {
  const persona_role_map = getPersonaRoleMap();
  const key = persona as keyof typeof persona_role_map;
  const roles: AllRoles[] = persona_role_map[key];
  return roles;
};

export const getUserLevelForPersona = (persona: AllPersonas): UserLevel => {
  const user_level_persona_map = getUserLevelPersonaMap_Pure();

  let default_user_level: UserLevel = UserLevel.BRAND;
  Object.values(UserLevel).some((user_level) => {
    const key = user_level as keyof typeof user_level_persona_map;
    const personas = user_level_persona_map[key];
    if (personas && (personas as readonly AllPersonas[]).includes(persona)) {
      default_user_level = key;
      return default_user_level;
    }
  });

  return default_user_level;
};

export const getPurePersonasByLevel = (level: UserLevel) => {
  const user_level_persona_map = getUserLevelPersonaMap_Pure();
  const key = level as keyof typeof user_level_persona_map;
  const personas = user_level_persona_map[key];
  return personas;
};

export const getGeneralPersonasByLevel = (level: UserLevel) => {
  const user_level_persona_map = getUserLevelPersonaMap_NonPure();
  const key = level as keyof typeof user_level_persona_map;
  const personas = user_level_persona_map[key];
  return personas;
};
