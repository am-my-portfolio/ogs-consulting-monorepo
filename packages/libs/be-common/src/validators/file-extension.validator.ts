import { extname } from 'path';
import { FileValidator, Injectable, Logger } from '@nestjs/common';
import { AcceptableAttachmentExtensionType } from '@am-ogs/types';
import { isAllowedExtension } from '../utils';

export interface ICustomUploadTypeValidatorOptions {
  extensions: readonly AcceptableAttachmentExtensionType[];
}

@Injectable()
export class FileExtensionValidator extends FileValidator {
  private logger = new Logger(FileExtensionValidator.name);

  constructor(
    protected readonly validationOptions: ICustomUploadTypeValidatorOptions,
  ) {
    super(validationOptions);
  }

  isValid(file: Express.Multer.File): boolean {
    this.logger.debug(`[isValid]`);

    if (!file) {
      return false;
    }

    const extension = extname(
      file.originalname,
    ) as AcceptableAttachmentExtensionType;
    if (!isAllowedExtension(extension)) {
      const error_message = this.buildErrorMessage(extension);
      this.logger.error(error_message);
      return false;
    }
    return true;
  }

  buildErrorMessage(extension: string): string {
    return `File type ${extension} not supported`;
  }
}
