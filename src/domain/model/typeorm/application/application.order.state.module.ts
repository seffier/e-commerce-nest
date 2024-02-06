import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationOrderStateTypeorm } from './application.order.state.typeorm';
import { CONNECTION } from '../../../../infrastructure/injection/constant.enum';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [ApplicationOrderStateTypeorm],
      CONNECTION.MYSQL_ECOMMERCE,
    ),
  ],
  exports: [TypeOrmModule],
})
export default class ApplicationOrderStateTypeOrmModule {}
