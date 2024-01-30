import { Module } from '@nestjs/common';
import { AuthLoginController } from '../controller/login/auth.login.controller';

@Module({
  imports: [],
  controllers: [AuthLoginController],
})
export class AuthModule {}
