import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'board',
  entities: [__dirname + '/../**/*.entity.{js,ts}'], // entities 파일을 기준으로 db table을 생성
  synchronize: true,
};
