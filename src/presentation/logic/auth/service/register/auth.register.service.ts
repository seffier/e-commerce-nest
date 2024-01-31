import { UserInsertUsecase } from '../../../../../application/usecase/user/crud/create/user.insert.usecase';
import { FormUserInsertUsecase } from '../../../../../application/usecase/formUser/crud/create/form.user.insert.usecase';
import { HttpException, Injectable } from '@nestjs/common';
import { AuthRegisterRequestDto } from '../../dto/request/register/auth.register.request.dto';
import { FormUserFindUsecase } from '../../../../../application/usecase/formUser/crud/read/form.user.find.usecase';
import { ApiErrorEnum } from '../../../../enum/api.error.enum';

@Injectable()
export class AuthRegisterService {
  constructor(
    protected userInsertUsecase: UserInsertUsecase,
    protected formUserInsertUsecase: FormUserInsertUsecase,
    protected formUserFindUsecase: FormUserFindUsecase,
  ) {}

  async register(req: AuthRegisterRequestDto): Promise<boolean> {
    return this.formUserFindUsecase
      .findByEmail({ email: req.email })
      .then((emailExists) => {
        if (emailExists)
          throw new HttpException(ApiErrorEnum.USER_ALREADY_EXISTS, 400);
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
      });
  }
}
