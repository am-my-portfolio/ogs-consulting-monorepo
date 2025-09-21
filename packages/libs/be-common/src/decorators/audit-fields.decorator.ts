import {
  createParamDecorator,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
// import { UserInfoUtils } from '@purepm/common';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AuditFields = createParamDecorator(async (data, context) => {
  const req = context.switchToHttp().getRequest();

  if (req?.headers) {
    const audit_fields = {}; // await UserInfoUtils.getAuditFields(req);

    if (!audit_fields) {
      throw new UnprocessableEntityException(
        'Undefined Audit Field Values to write to the database',
      );
    }

    return audit_fields;
  } else {
    throw new UnauthorizedException('No Headers');
  }
});
