import { isUndefined } from 'lodash';
import { IPaginationType } from './types';

// /* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/naming-convention
const DEFAULT_PAGINATION_COUNT = 10;

export const calculatePagination = function (
  page: number,
  count: number,
): IPaginationType {
  let offset = 0,
    limit: number = DEFAULT_PAGINATION_COUNT;
  if (isNaN(page) || isNaN(count)) {
    throw new Error('Invalid page or count value');
  }
  if (!isUndefined(page) && !isUndefined(count)) {
    offset = page * count;
    limit = count;
  }

  return { offset, limit };
};
