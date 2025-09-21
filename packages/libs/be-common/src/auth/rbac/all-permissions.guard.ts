import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { allPermissionsMatch } from '@am-ogs/fs-common';
import { AllPermissions } from '@am-ogs/types';

@Injectable()
export class AllPermissionsGuard implements CanActivate {
  private readonly logger = new Logger(AllPermissionsGuard.name);

  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.logger.debug('[canActivate]');

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

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const hasPermissions = () => required_permissions_found;

    return hasPermissions();
  }
}
