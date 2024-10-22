import { RoleIds, AllRoles } from "./types";

export const getRoleId = (role: AllRoles) => {
  const key = Object.keys(AllRoles)[Object.values(AllRoles).indexOf(role)];
  const role_id = RoleIds[key];
  return role_id;
};
