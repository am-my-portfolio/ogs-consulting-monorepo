import 'reflect-metadata';

export const format_metadata_key = Symbol('CsvKey');

/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const csvKey = (name: string) => (target: Object, property: any) => {
  const metadata = Reflect.getMetadata(format_metadata_key, target) || {};
  metadata[name] = property;
  Reflect.defineMetadata(format_metadata_key, metadata, target);
};

export function getCsvKey(target: any, property_key: string) {
  const metadata = Reflect.getMetadata(format_metadata_key, target) || {};
  return metadata[property_key];
}
