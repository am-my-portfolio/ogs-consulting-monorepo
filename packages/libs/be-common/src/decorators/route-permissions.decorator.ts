import { SetMetadata } from '@nestjs/common';
import { AllPermissions } from '@am-ogs/types';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const RoutePermissions = (...permissions: AllPermissions[]) => {
  return SetMetadata('permissions', permissions);
};
