import { Injectable } from '@nestjs/common';
import { UserFindUsecase } from '../../../../../application/usecase/user/crud/read/user.find.usecase';
import { AuthLoginRequestDto } from '../../dto/request/register/auth.login.request.dto';

@Injectable()
export class AuthLoginService {
  constructor(protected userFindUsecase: UserFindUsecase) {}

  async login(req: AuthLoginRequestDto): Promise<boolean> {
    return this.userFindUsecase
      .getPassword({
        email: req.email,
      })
      .then((password) => {
        console.log(password);
        return !!password;
      });
  }
}
