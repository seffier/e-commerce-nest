import { HttpException, Injectable } from '@nestjs/common';
import { UserFindUsecase } from '../../../../../application/usecase/user/crud/read/user.find.usecase';
import { AuthLoginRequestDto } from '../../dto/request/register/auth.login.request.dto';
import { PasswordHashFetcher } from '../../../../../infrastructure/hash/hash.abstract.service';
import { UniqueKeyDto } from '../../../../../application/usecase/dto/uniqueKey.dto';
import { ApiErrorEnum } from '../../../../enum/api.error.enum';

@Injectable()
export class AuthLoginService {
  constructor(
    protected userFindUsecase: UserFindUsecase,
    protected passwordHashService: PasswordHashFetcher,
  ) {}

  async login(req: AuthLoginRequestDto): Promise<UniqueKeyDto> {
    return this.userFindUsecase
      .login({
        email: req.email,
      })
      .then(async (user) => {
        const passwordCheck = await this.passwordHashService.comparePassword(
          req.password,
          user.passwordHash,
        );
        if (!passwordCheck)
          throw new HttpException(ApiErrorEnum.USER_NOT_FOUND, 400);
        return {
          uniqueKey: user.uniqueKey,
        };
      });
  }
}
