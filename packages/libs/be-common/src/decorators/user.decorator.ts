import { createParamDecorator, UnauthorizedException } from '@nestjs/common';
import { AllPersonas, IUserInfo } from '@am-ogs/types';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const User = createParamDecorator(
  async (data, context): Promise<IUserInfo> => {
    const req = context.switchToHttp().getRequest();

    if (req?.headers) {
      // TODO: write something again, similar to // await UserInfoUtils.getUserInfo(req.headers);
      // I dont have the implementation of getUserInfo anymore, though
      const user_info: IUserInfo = {
        corporation_id: '',
        person_id: '',
        persona: AllPersonas.PURE_SUPER_ADMIN,
        data_access: {},
        given_name: '',
        family_name: '',
        nickname: '',
        name: '',
        picture: '',
        locale: '',
        updated_at: '',
        email: '',
        email_verified: false,
        iss: '',
        sub: '',
        iat: 0,
        exp: 0,
        aud: [],
        azp: '',
        scope: '',
        permissions: [],
      };
      return user_info;
    } else {
      throw new UnauthorizedException('No Headers');
    }
  },
);
