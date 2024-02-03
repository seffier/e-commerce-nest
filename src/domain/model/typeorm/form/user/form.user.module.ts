import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormUserTypeorm } from './form.user.typeorm';
import { CONNECTION } from '../../../../../infrastructure/injection/constant.enum';

@Module({
  imports: [
    TypeOrmModule.forFeature([FormUserTypeorm], CONNECTION.MYSQL_ECOMMERCE),
  ],
  exports: [TypeOrmModule],
})
export default class FormUserTypeOrmModule { }
