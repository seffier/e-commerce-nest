import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardUserTypeorm } from './dashboard.user.typeorm';
import { CONNECTION } from '../../../../infrastructure/injection/constant.enum';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [DashboardUserTypeorm],
      CONNECTION.MYSQL_ECOMMERCE,
    ),
  ],
  exports: [TypeOrmModule],
})
export default class DashboardUserTypeOrmModule {}
