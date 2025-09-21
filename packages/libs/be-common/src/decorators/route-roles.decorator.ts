import { SetMetadata } from '@nestjs/common';
import { AllRoles } from '@am-ogs/types';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const RouteRoles = (...roles: AllRoles[]) => {
  return SetMetadata('roles', roles);
};
