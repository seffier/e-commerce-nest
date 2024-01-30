import { Module } from '@nestjs/common';
import { AuthLoginService } from './auth.login.service';
import { UserLoginModule } from '../../../../../application/injection/auth/user.login.module';

@Module({
  imports: [UserLoginModule],
  providers: [AuthLoginService],
  exports: [AuthLoginService],
})
export class AuthLoginModule {}
