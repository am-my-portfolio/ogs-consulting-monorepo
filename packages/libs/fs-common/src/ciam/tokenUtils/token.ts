import { IUserInfo, Environment } from '@am-ogs/types';

const node_env = process.env.NODE_ENV as Environment;

/* eslint-disable no-console */
export class TokenUtils {
  static readonly determineTokenType = (
    decoded_access_token: IUserInfo | null | undefined,
  ) => {
    // console.log(`[determineTokenType]`);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data_access = decoded_access_token
      ? decoded_access_token.data_access
      : undefined;
    const is_user_token = Boolean(
      decoded_access_token &&
        !decoded_access_token.is_m2m_token &&
        data_access?.user_level,
    );
    const is_m2m_token = Boolean(
      decoded_access_token && decoded_access_token.is_m2m_token && !data_access,
    );

    return { is_m2m_token, is_user_token };
  };

  // static readonly getOrgDetailsFromUserInfo = (user_info: IUserInfo) => {
  //   // console.log(`[getOrgDetailsFromUserInfo]`);
  //   const { corporation_id, division_id, brand_id, brand_access } = user_info;
  //   return { corporation_id, division_id, brand_id, brand_access };
  // };
}
