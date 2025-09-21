import _ from 'lodash';
import { AcceptableAttachmentExtensionType } from '@am-ogs/types';

/* eslint-disable @typescript-eslint/ban-types */
export function snakeCaseKeys<T>(obj: Object): T {
  if (!_.isObject(obj) || _.isDate(obj)) {
    return obj as T;
  } else if (_.isArray(obj)) {
    return obj.map((v) => snakeCaseKeys(v)) as unknown as T;
  }
  return _.reduce(
    obj,
    (r, v, k) => {
      if (k.includes('_')) {
        return {
          ...r,
          [k]: v,
        };
      } else {
        return {
          ...r,
          [_.snakeCase(k)]: snakeCaseKeys(v),
        };
      }
    },
    {} as T,
  );
}

export function isAllowedExtension(
  extension: AcceptableAttachmentExtensionType,
): boolean {
  return false; // AcceptableAttachmentExtensions.includes(extension);
}
