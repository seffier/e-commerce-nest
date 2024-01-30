import { ConfigService } from '@nestjs/config';
import { DIALECT, MYSQL_ENV } from '../constant.enum';
import { MysqlTypeormProvider } from '../../../domain/model/typeorm/mysql.typeorm.provider';

export const typeOrmFactoryMysql = (configService: ConfigService) => ({
  type: DIALECT.mysql,
  host: configService.get(MYSQL_ENV.HOST),
  port: +configService.get(MYSQL_ENV.PORT),
  username: configService.get(MYSQL_ENV.USERNAME),
  password: configService.get(MYSQL_ENV.PASSWORD),
  database: configService.get(MYSQL_ENV.DATABASE),
  entities: MysqlTypeormProvider,
  logging: true,
  synchronize: false,
});
