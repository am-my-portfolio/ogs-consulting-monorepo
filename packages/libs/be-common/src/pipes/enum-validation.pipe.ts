import { isDefined, isEnum } from 'class-validator';
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

/* eslint-disable @typescript-eslint/no-explicit-any */
@Injectable()
export class EnumValidationPipe implements PipeTransform<string, any> {
  constructor(private enum_entity: any) {}

  transform(value: string): string {
    if (isDefined(value) && isEnum(value, this.enum_entity)) {
      return value;
    } else {
      const error_message = `Value "${value}" of Query param is not valid. Must be one of: ${Object.keys(
        this.enum_entity,
      ).map((key) => this.enum_entity[key])}`;
      throw new BadRequestException(error_message);
    }
  }
}
