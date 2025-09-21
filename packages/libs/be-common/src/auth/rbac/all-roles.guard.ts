import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { allRolesMatch } from '@am-ogs/fs-common';
import { AllRoles } from '@am-ogs/types';

@Injectable()
export class AllRolesGuard implements CanActivate {
  private readonly logger = new Logger(AllRolesGuard.name);

  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.logger.debug('[canActivate]');

    const all_required_route_roles = this.reflector.get<AllRoles[]>(
      'roles',
      context.getHandler(),
    );
    const { user } = context.getArgs()[0];
    if (!user) {
      throw new UnauthorizedException();
    }

    const required_roles_found = allRolesMatch(user, all_required_route_roles);

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const hasRoles = () => required_roles_found;

    return hasRoles();
  }
}
