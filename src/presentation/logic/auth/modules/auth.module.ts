import { Module } from '@nestjs/common';
import { AuthLoginController } from '../controller/login/auth.login.controller';
import { AuthLoginModule } from '../service/login/auth.login.module';
import { AuthRegisterController } from '../controller/register/auth.register.controller';
import { AuthRegisterModule } from '../service/register/auth.register.module';

@Module({
  imports: [AuthLoginModule, AuthRegisterModule],
  controllers: [AuthLoginController, AuthRegisterController],
})
export class AuthModule {}
