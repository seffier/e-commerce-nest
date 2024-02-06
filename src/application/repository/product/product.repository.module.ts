import { Module, forwardRef } from '@nestjs/common';
import ProductTypeOrmModule from 'src/domain/model/typeorm/product/product.module';
import MysqlDbModule from 'src/infrastructure/injection/module/mysql.db.module';
import { ProductRepository } from './product.repository';

@Module({
  imports: [MysqlDbModule, forwardRef(() => ProductTypeOrmModule)],
  providers: [ProductRepository],
  exports: [ProductRepository],
})
export default class ProductRepositoryModule {}
