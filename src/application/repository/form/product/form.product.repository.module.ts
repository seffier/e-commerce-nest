import { Module, forwardRef } from '@nestjs/common';
import { FormProductRepository } from './form.product.repository';
import FormProductTypeOrmModule from '../../../../domain/model/typeorm/form/product/form.product.module';
import MysqlDbModule from '../../../../infrastructure/injection/module/mysql.db.module';

@Module({
  imports: [MysqlDbModule, forwardRef(() => FormProductTypeOrmModule)],
  providers: [FormProductRepository],
  exports: [FormProductRepository],
})
export default class FormProductRepositoryModule {}
