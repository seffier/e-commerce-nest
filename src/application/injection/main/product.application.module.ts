import { Module } from '@nestjs/common';
import { ProductFindUsecase } from '../../usecase/product/crud/read/product.find.usecase';
import ProductRepositoryModule from '../../repository/product/product.repository.module';

@Module({
  imports: [ProductRepositoryModule],
  providers: [ProductFindUsecase],
  exports: [ProductFindUsecase],
})
export class ProductAppModule {}
