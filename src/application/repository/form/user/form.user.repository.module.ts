import { forwardRef, Module } from '@nestjs/common';
import { FormUserRepository } from './form.user.repository';
import MysqlDbModule from '../../../../infrastructure/injection/module/mysql.db.module';
import FormUserTypeOrmModule from '../../../../domain/model/typeorm/form/user/form.user.module';

@Module({
  providers: [FormUserRepository],
  imports: [MysqlDbModule, forwardRef(() => FormUserTypeOrmModule)],
  exports: [FormUserRepository],
})
export default class FormUserRepositoryModule {}
