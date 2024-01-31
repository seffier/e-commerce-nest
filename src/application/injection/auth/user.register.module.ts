import { Module } from '@nestjs/common';
import UserRepositoryModule from '../../repository/user/user.repository.module';
import { UserInsertUsecase } from '../../usecase/user/crud/create/user.insert.usecase';
import { FormUserInsertUsecase } from '../../usecase/formUser/crud/create/form.user.insert.usecase';
import FormUserRepositoryModule from '../../repository/form/user/form.user.repository.module';
import { FormUserFindUsecase } from '../../usecase/formUser/crud/read/form.user.find.usecase';

@Module({
  imports: [UserRepositoryModule, FormUserRepositoryModule],
  providers: [UserInsertUsecase, FormUserInsertUsecase, FormUserFindUsecase],
  exports: [UserInsertUsecase, FormUserInsertUsecase, FormUserFindUsecase],
})
export class UserRegisterModule {}
