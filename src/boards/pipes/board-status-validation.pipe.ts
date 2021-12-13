import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BOARD_STATUS } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BOARD_STATUS.PRIVATE, BOARD_STATUS.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);
    console.log(metadata);

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not exist`);
    }

    return value;
  }

  private isStatusValid = (status: any): boolean => {
    return this.StatusOptions.indexOf(status) > -1;
  };
}
