// eslint-disable-next-line @typescript-eslint/no-var-requires
const csv = require('csv-parser');
import { plainToClass, classToPlain } from 'class-transformer';
import { Injectable } from '@nestjs/common';
import { getCsvKey } from './csvkey.decorator';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IParsedData<T> {
  list: T[];
  total: number;
  count: number | null;
  offset: number | null;
}

@Injectable()
export class CsvParser {
  async parse(
    stream: { pipe: (arg0: any) => any },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Entity: any,
    count: number = 10,
    offset: number = 1,
    csv_config: object = {},
  ): Promise<IParsedData<InstanceType<typeof Entity>>> {
    return new Promise((resolve, reject) => {
      let i = 0;
      let c = 0;
      const list: unknown[] = [];
      const errors: any[] = [];

      const piped_stream = stream.pipe(
        csv({
          strict: true,
          separator: ';',
          ...csv_config,
        }),
      );

      piped_stream.on('error', (e: any) => {
        errors.push(e);

        reject({ errors });
      });

      piped_stream.on('data', (line: unknown) => {
        i++;

        if (count) {
          if (c >= count) {
            return;
          }

          if (offset && i - 1 < offset) {
            return;
          }

          c++;
        }

        list.push(this.processLine(line, Entity));
      });

      piped_stream.on('end', () =>
        errors.length > 0
          ? reject({ errors })
          : resolve({
              list,
              count,
              offset,
              total: i,
            }),
      );
    });
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  processLine(line: any, Entity: any): any {
    const entity_instance = new Entity();
    const plain: Record<string, any> = {};
    const plain_line = classToPlain(line);

    Object.keys(plain_line).forEach((key: string) => {
      const remap_key = getCsvKey(entity_instance, key);
      plain[remap_key || key] = plain_line[key];
    });

    return plainToClass(Entity, plain);
  }
}
