import { IsNotEmpty, IsString } from 'class-validator';
import { BoardStatus } from '../board-status.enum';

export class BoardDto {
  // @IsInt()
  // id: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  status: BoardStatus;
}
