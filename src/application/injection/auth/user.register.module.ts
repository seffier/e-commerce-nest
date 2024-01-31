import { Module } from '@nestjs/common';
import UserRepositoryModule from '../../repository/user/user.repository.module';
import { UserInsertUsecase } from '../../usecase/user/crud/create/user.insert.usecase';
import { FormUserInsertUsecase } from '../../usecase/formUser/crud/create/form.user.insert.usecase';
import FormUserRepositoryModule from '../../repository/form/user/form.user.repository.module';
import { UserFindUsecase } from '../../usecase/user/crud/read/user.find.usecase';
import { PasswordHashModule } from '../../../infrastructure/injection/module/passwordHash.module';

@Module({
  imports: [UserRepositoryModule, FormUserRepositoryModule, PasswordHashModule],
  providers: [UserInsertUsecase, UserFindUsecase, FormUserInsertUsecase],
  exports: [UserInsertUsecase, UserFindUsecase, FormUserInsertUsecase],
})
export class UserRegisterModule {}
