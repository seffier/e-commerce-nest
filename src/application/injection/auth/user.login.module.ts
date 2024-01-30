import { Module } from '@nestjs/common';
import UserRepositoryModule from '../../repository/user/user.repository.module';

@Module({
  imports: [UserRepositoryModule],
  providers: [],
  exports: [],
})
export class UserLoginModule {}
