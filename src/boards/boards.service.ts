import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { BoardDto } from './dto/board.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  createBoard(boardDto: BoardDto): Promise<Board> {
    return this.boardRepository.createBoard(boardDto);
  }

  getAllBoards = (): Promise<Board[]> => {
    return this.boardRepository.getAllBoards();
  };

  async getBoardById(id: number): Promise<Board> {
    const board = await this.boardRepository.findOne(id);
    if (!board) {
      throw new NotFoundException(`Cannot find board with id ${id}`);
    }
    return board;
  }
}
