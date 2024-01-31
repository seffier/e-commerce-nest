import { Module } from '@nestjs/common';
import UserRepositoryModule from '../../repository/user/user.repository.module';
import { UserFindUsecase } from '../../usecase/user/crud/read/user.find.usecase';
import FormUserRepositoryModule from '../../repository/form/user/form.user.repository.module';

@Module({
  imports: [UserRepositoryModule, FormUserRepositoryModule],
  providers: [UserFindUsecase],
  exports: [UserFindUsecase],
})
export class UserLoginModule {}
