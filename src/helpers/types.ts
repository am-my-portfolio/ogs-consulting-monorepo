export enum Permissions {
  READ = "read",
  WRITE = "write",
}

export enum SpecialRoles {
  SUPER_ADMIN = "Super Admin",
}

export enum GeneralRoles {
  TEAM_ADMIN = "Team Admin",
  TEAM_MEMBER = "Team Member",
  CLIENT = "Client",
}

export type AllRoles = SpecialRoles | GeneralRoles;

export const AllRoles = {
  ...SpecialRoles,
  ...GeneralRoles,
};

export enum RoleIds {
  TEAM_ADMIN = "rol_LSeHE4MuAfZlutXg",
  TEAM_MEMBER = "rol_3RmEpEgOS8onPsXt",
  CLIENT = "rol_ahDgtPUuFL1yvnfv",
}

export interface ICreateUser {
  given_name: string;
  family_name: string;
  email: string;
  user_role: AllRoles;
}

export interface ISendPortalInviteRequest {
  email: string;
  client_id: string;
  auth0_org_id: string;
}

export type Item = {
  name: string;
  target: string;
  icon: string;
  current: boolean;
  roles?: AllRoles[];
  items: Item[];
};
