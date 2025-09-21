import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class EmailValidationPipe implements PipeTransform {
  async transform(email: string) {
    /* eslint-disable no-useless-escape */
    if (
      !/^\w([\+.-]?\w{1,100})+@\w([\+.-]?\w{1,237})+(\.\w{2,})+$/.test(email)
    ) {
      throw new BadRequestException('Invalid email address.');
    }
    return email;
  }
}
