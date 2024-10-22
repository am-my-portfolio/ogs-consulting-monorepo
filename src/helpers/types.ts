export enum Permissions {
  READ = "read",
  WRITE = "write",
}

export enum SpecialRoles {
  SUPER_ADMIN = "Super Admin",
}

export enum GeneralRoles {
  NAVIGATOR = "Navigator",
  PROFESSIONAL = "Professional",
  CLIENT = "Client",
}

export type AllRoles = SpecialRoles | GeneralRoles;

export const AllRoles = {
  ...SpecialRoles,
  ...GeneralRoles,
};

export enum RoleIds {
  NAVIGATOR = "rol_hirVx22Zj98EeNwv",
  PROFESSIONAL = "rol_9w8jnzrL4cMqVSrq",
  CLIENT = "rol_Zwu3V1obnMymWZFF",
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
