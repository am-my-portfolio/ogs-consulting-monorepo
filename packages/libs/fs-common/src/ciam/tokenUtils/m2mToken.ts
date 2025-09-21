import { IUserInfo, Environment } from '@am-ogs/types';

const node_env = process.env.NODE_ENV as Environment;

/* eslint-disable no-console */
export class M2MTokenUtils {
  static readonly getCorporationIdFromM2MToken = (user_info: IUserInfo) => {
    const corporation_claim_key = 'domain/corporation_id'; // TOOD: move to am/types
    const corporation_id = undefined;
    // user_info?.corporation_id ?? user_info[corporation_claim_key];

    if (!corporation_id) {
      throw new Error('Unauthorized');
    }

    return { corporation_id };
  };
}
