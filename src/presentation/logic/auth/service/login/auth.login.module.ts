import { Module } from '@nestjs/common';
import { AuthLoginService } from './auth.login.service';
import { UserLoginModule } from '../../../../../application/injection/auth/user.login.module';
import { PasswordHashModule } from '../../../../../infrastructure/injection/module/passwordHash.module';
import { JwtLocalModule } from '../../../../../infrastructure/jwt/jwt.module';

@Module({
  imports: [UserLoginModule, PasswordHashModule, JwtLocalModule],
  providers: [AuthLoginService],
  exports: [AuthLoginService],
})
export class AuthLoginModule {}
