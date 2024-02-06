import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationProductCategoryTypeorm } from './application.product.category.typeorm';
import { CONNECTION } from '../../../../infrastructure/injection/constant.enum';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [ApplicationProductCategoryTypeorm],
      CONNECTION.MYSQL_ECOMMERCE,
    ),
  ],
  exports: [TypeOrmModule],
})
export default class ApplicationProductCategoryTypeOrmModule {}
