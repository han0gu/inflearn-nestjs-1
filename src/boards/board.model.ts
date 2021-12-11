export interface Board {
  id: string;
  title: string;
  description: string;
  status: BOARD_STATUS;
}

export enum BOARD_STATUS {
  PUBLIC = 'PUBLUC',
  PRIVATE = 'PRIVATE',
}
