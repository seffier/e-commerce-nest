import { HttpException, Injectable } from '@nestjs/common';
import { UserFindUsecase } from '../../../../../application/usecase/user/crud/read/user.find.usecase';
import { AuthLoginRequestDto } from '../../dto/request/login/auth.login.request.dto';
import { PasswordHashFetcher } from '../../../../../infrastructure/hash/hash.abstract.service';
import { ApiErrorEnum } from '../../../../enum/api.error.enum';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginResponseDto } from '../../dto/response/login/auth.login.response.dto';

@Injectable()
export class AuthLoginService {
  constructor(
    protected userFindUsecase: UserFindUsecase,
    protected passwordHashService: PasswordHashFetcher,
    protected jwtService: JwtService,
  ) {}

  async login(req: AuthLoginRequestDto): Promise<AuthLoginResponseDto> {
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
          accessToken: this.jwtService.sign({ uniqueKey: user.uniqueKey }),
        };
      });
  }
}
