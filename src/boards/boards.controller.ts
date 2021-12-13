import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Board, BOARD_STATUS } from './board.model';
import { BoardsService } from './boards.service';
import { BoardDto } from './dto/board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoards(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Get('/:boardId')
  getBoardById(@Param('boardId') boardId: string): Board {
    return this.boardsService.getBoardById(boardId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() bodyObj: BoardDto): Board {
    return this.boardsService.createBoard(bodyObj);
  }

  @Patch('/:boardId/status')
  updateBoardStatus(
    @Param('boardId') boardId: string,
    @Body('status', BoardStatusValidationPipe) status: BOARD_STATUS,
  ) {
    return this.boardsService.updateBoardStatus(boardId, status);
  }
}
