import { EntityRepository, Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardDto } from './dto/board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  //
  createBoard = async (boardDto: BoardDto): Promise<Board> => {
    const { title, description } = boardDto;
    const newBoard = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    return await this.save(newBoard);
  };

  getAllBoards = async (): Promise<Board[]> => {
    return await this.find({
      order: {
        id: 'ASC',
      },
    });
  };

  getBoardById = async (id: number): Promise<Board> => {
    return await this.findOne(id);
  };

  updateBoardById = async (id: number) => {
    return await this.update(id, { status: BoardStatus.PRIVATE });
  };

  deleteBoardById = async (id: number) => {
    return await this.delete(id);
  };
}
