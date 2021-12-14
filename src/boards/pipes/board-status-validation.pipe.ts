import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

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
