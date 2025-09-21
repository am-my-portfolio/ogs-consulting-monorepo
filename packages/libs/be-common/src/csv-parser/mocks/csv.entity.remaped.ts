import { csvKey } from '../csvkey.decorator';
import { Type as CsvType } from 'class-transformer';

export class CsvEntityRemaped {
  @csvKey('foo')
  @CsvType(() => Number)
  id: number;

  @csvKey('bar')
  value: string;

  nothing: string;

  constructor(partial: Partial<CsvEntityRemaped>) {
    Object.assign(this, partial);
  }
}
