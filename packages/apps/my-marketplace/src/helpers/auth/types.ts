export enum Permissions {
  READ = "read",
  WRITE = "write",
}

export enum SpecialRoles {
  SUPER_ADMIN = "Super Admin",
}

export enum GeneralRoles {
  ADMIN = "Admin",
  VENDOR = "Vendor",
  CONSUMER = "Consumer",
}

export type AllRoles = SpecialRoles | GeneralRoles;

export const AllRoles = {
  ...SpecialRoles,
  ...GeneralRoles,
};

export enum RoleIds {
  VENDOR = "rol_hirVx22Zj98EeNwv",
  ADMIN = "rol_9w8jnzrL4cMqVSrq",
  CONSUMER = "rol_Zwu3V1obnMymWZFF",
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
}
