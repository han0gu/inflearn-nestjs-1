import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { BoardDto } from './dto/board.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  createBoard = (boardDto: BoardDto): Promise<Board> => {
    return this.boardRepository.createBoard(boardDto);
  };

  getAllBoards = (): Promise<Board[]> => {
    return this.boardRepository.getAllBoards();
  };

  getBoardById = (id: number): Promise<Board> => {
    const board = this.boardRepository.getBoardById(id);
    if (!board) {
      throw new NotFoundException();
    }
    return board;
  };

  updateBoardById = (id: number) => {
    return this.boardRepository.updateBoardById(id);
  };

  deleteBoardById = (id: number) => {
    return this.boardRepository.deleteBoardById(id);
  };
}
