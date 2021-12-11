import { Injectable } from '@nestjs/common';
import { Board, BOARD_STATUS } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  boards: Board[] = [];

  getAllBoards = (): Board[] => {
    return this.boards;
  };

  createBoard = (title: string, description: string): Board => {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BOARD_STATUS.PUBLIC,
    };

    this.boards.push(board);

    return board;
  };
}
