import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { TokenUtils, allPermissionsMatch, allRolesMatch } from '@am-ogs/fs-common';
import { AllPermissions, AllRoles } from '@am-ogs/types';

@Injectable()
export class AllRolesOrPermissionsGuard implements CanActivate {
  private readonly logger = new Logger(AllRolesOrPermissionsGuard.name);

  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.logger.debug('[canActivate]');

    const all_required_route_roles = this.reflector.get<AllRoles[]>(
      'roles',
      context.getHandler(),
    );
    const all_required_route_permissions = this.reflector.get<AllPermissions[]>(
      'permissions',
      context.getHandler(),
    );

    const { user } = context.getArgs()[0];
    if (!user) {
      throw new UnauthorizedException();
    }

    const required_permissions_found = allPermissionsMatch(
      user,
      all_required_route_permissions,
    );
    let required_roles_found = false;

    const { is_user_token } = TokenUtils.determineTokenType(user);
    if (is_user_token) {
      required_roles_found = allRolesMatch(user, all_required_route_roles);
    }

    this.logger.debug(
      { required_roles_found, required_permissions_found },
      '[canActivate]',
    );

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const hasRolesOrPermissions = () =>
      required_roles_found || required_permissions_found;

    return hasRolesOrPermissions();
  }
}
