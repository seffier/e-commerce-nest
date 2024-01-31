import { Module } from '@nestjs/common';
import { AuthRegisterService } from './auth.register.service';
import { UserRegisterModule } from '../../../../../application/injection/auth/user.register.module';
import { PasswordHashModule } from '../../../../../infrastructure/injection/module/passwordHash.module';

@Module({
  imports: [UserRegisterModule, PasswordHashModule],
  providers: [AuthRegisterService],
  exports: [AuthRegisterService],
})
export class AuthRegisterModule {}
