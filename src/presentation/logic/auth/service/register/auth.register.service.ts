import { UserInsertUsecase } from '../../../../../application/usecase/user/crud/create/user.insert.usecase';
import { FormUserInsertUsecase } from '../../../../../application/usecase/formUser/crud/create/form.user.insert.usecase';
import { HttpException, Injectable } from '@nestjs/common';
import { AuthRegisterRequestDto } from '../../dto/request/register/auth.register.request.dto';
import { ApiErrorEnum } from '../../../../enum/api.error.enum';
import { UserFindUsecase } from '../../../../../application/usecase/user/crud/read/user.find.usecase';
import { PasswordHashFetcher } from '../../../../../infrastructure/hash/hash.abstract.service';

@Injectable()
export class AuthRegisterService {
  constructor(
    protected userInsertUsecase: UserInsertUsecase,
    protected formUserInsertUsecase: FormUserInsertUsecase,
    protected userFindUsecase: UserFindUsecase,
    protected passwordHashService: PasswordHashFetcher,
  ) {}

  async register(req: AuthRegisterRequestDto): Promise<boolean> {
    return this.userFindUsecase
      .checkEmail({ email: req.email })
      .then(async (emailExists) => {
        if (emailExists.success)
          throw new HttpException(ApiErrorEnum.USER_ALREADY_EXISTS, 400);
        const hashedPassword = await this.passwordHashService.hashPassword(
          req.password,
        );
        return this.formUserInsertUsecase
          .register({
            fullName: req.fullName,
            email: req.email,
            passwordHash: hashedPassword,
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
