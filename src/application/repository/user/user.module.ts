import { forwardRef, Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import MysqlDbModule from '../../../infrastructure/injection/module/mysql.db.module';
import UserTypeOrmModule from '../../../domain/model/typeorm/user/user.module';

@Module({
  providers: [UserRepository],
  imports: [MysqlDbModule, forwardRef(() => UserTypeOrmModule)],
  exports: [UserRepository],
})
export default class UserRepositoryModule {}
