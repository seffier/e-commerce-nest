import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeorm } from './user.typeorm';
import { CONNECTION } from '../../../../infrastructure/injection/constant.enum';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserTypeorm], CONNECTION.MYSQL_ECOMMERCE),
  ],
  exports: [TypeOrmModule],
})
export default class UserTypeOrmModule {}
