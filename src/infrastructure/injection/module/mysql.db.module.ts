import { CONNECTION } from '../constant.enum';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmFactoryMysql } from '../factory/TypeOrm.factory';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: false,
        }),
      ],
      name: CONNECTION.MYSQL_ECOMMERCE,
      useFactory: typeOrmFactoryMysql,
      inject: [ConfigService],
    }),
  ],
})
export default class MysqlDbModule {}
