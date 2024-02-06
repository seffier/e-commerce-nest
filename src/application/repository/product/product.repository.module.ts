import { Module, forwardRef } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import MysqlDbModule from '../../../infrastructure/injection/module/mysql.db.module';
import ProductTypeOrmModule from '../../../domain/model/typeorm/product/product.module';

@Module({
  imports: [MysqlDbModule, forwardRef(() => ProductTypeOrmModule)],
  providers: [ProductRepository],
  exports: [ProductRepository],
})
export default class ProductRepositoryModule {}
