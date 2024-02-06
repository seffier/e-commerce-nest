import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTypeorm } from './product.typeorm';
import { CONNECTION } from '../../../../infrastructure/injection/constant.enum';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductTypeorm], CONNECTION.MYSQL_ECOMMERCE),
  ],
  exports: [TypeOrmModule],
})
export default class ProductTypeOrmModule {}
