import { Module } from '@nestjs/common';
import { AuthRegisterService } from './auth.register.service';
import { UserRegisterModule } from '../../../../../application/injection/auth/user.register.module';

@Module({
  imports: [UserRegisterModule],
  providers: [AuthRegisterService],
  exports: [AuthRegisterService],
})
export class AuthRegisterModule {}
