import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Board, BOARD_STATUS } from './board.model';
import { BoardDto } from './dto/board.dto';

@Injectable()
export class BoardsService {
  boards: Board[] = [];

  getAllBoards = (): Board[] => {
    return this.boards;
  };

  getBoardById = (boardId: string): Board => {
    const board = this.boards.find((board) => board.id === boardId);
    if (!board) {
      throw new NotFoundException('error message test');
    }
    return board;
  };

  createBoard = (boardDto: BoardDto): Board => {
    const { title, description } = boardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BOARD_STATUS.PUBLIC,
    };
    this.boards.push(board);
    return board;
  };

  updateBoardStatus = (boardId: string, status: BOARD_STATUS): Board => {
    const board = this.getBoardById(boardId);
    board.status = status;
    return board;
  };
}
