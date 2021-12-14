import { EntityRepository, Repository } from 'typeorm';
import { BOARD_STATUS } from './board-status.enum';
import { Board } from './board.entity';
import { BoardDto } from './dto/board.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  createBoard = async (boardDto: BoardDto): Promise<Board> => {
    const { title, description } = boardDto;

    const newBoard = this.create({
      title,
      description,
      status: BOARD_STATUS.PUBLIC,
    });

    return await this.save(newBoard);
  };

  getAllBoards = (): Promise<Board[]> => {
    return this.find({ where: {} });
  };
}
