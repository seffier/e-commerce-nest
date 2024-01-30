import { UserInsertUsecase } from '../../../../../application/usecase/user/crud/create/user.insert.usecase';
import { FormUserInsertUsecase } from '../../../../../application/usecase/formUser/crud/create/form.user.insert.usecase';
import { Injectable } from '@nestjs/common';
import { AuthRegisterRequestDto } from '../../dto/request/register/auth.register.request.dto';

@Injectable()
export class AuthRegisterService {
  constructor(
    protected userInsertUsecase: UserInsertUsecase,
    protected formUserInsertUsecase: FormUserInsertUsecase,
  ) {}

  async register(req: AuthRegisterRequestDto): Promise<boolean> {
    return this.formUserInsertUsecase
      .register({
        fullName: req.fullName,
        email: req.email,
        passwordHash: req.password,
        phoneNumber: req.phoneNumber,
      })
      .then((user) =>
        this.userInsertUsecase.register({
          formUserId: user.Id,
        }),
      );
  }
}
