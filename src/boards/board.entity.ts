import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BOARD_STATUS } from './board.model';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BOARD_STATUS;
}
