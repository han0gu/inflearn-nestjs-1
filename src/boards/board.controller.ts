import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Board } from './board.entity';
import { BoardService } from './board.service';
import { BoardDto } from './dto/board.dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Post()
  createBoard(@Body() boardDto: BoardDto): Promise<Board> {
    return this.boardService.createBoard(boardDto);
  }

  @Get()
  getAllBoards(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id', ParseIntPipe) id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Patch('/:id/status')
  updateBoardById(@Param('id', ParseIntPipe) id: number) {
    return this.boardService.updateBoardById(id);
  }

  @Delete()
  deleteBoard(@Body('id', ParseIntPipe) id: number) {
    this.boardService.deleteBoardById(id);
  }
}
