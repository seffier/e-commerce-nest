import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderTypeorm } from './order.typeorm';
import { CONNECTION } from 'src/infrastructure/injection/constant.enum';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderTypeorm], CONNECTION.MYSQL_ECOMMERCE),
  ],
  exports: [TypeOrmModule],
})
export default class OrderTypeormModule {}
