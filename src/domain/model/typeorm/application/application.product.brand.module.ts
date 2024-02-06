import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationProductBrandTypeorm } from './application.product.brand.typeorm';
import { CONNECTION } from '../../../../infrastructure/injection/constant.enum';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [ApplicationProductBrandTypeorm],
      CONNECTION.MYSQL_ECOMMERCE,
    ),
  ],
  exports: [TypeOrmModule],
})
export default class ApplicationProductBrandTypeOrmModule {}
