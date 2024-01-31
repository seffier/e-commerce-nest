import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthLoginService } from '../../service/login/auth.login.service';
import { AuthLoginRequestDto } from '../../dto/request/register/auth.login.request.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthLoginController {
  constructor(private authLoginService: AuthLoginService) {}

  @Post('/login')
  async login(req: AuthLoginRequestDto): Promise<boolean> {
    return await this.authLoginService.login(req);
  }
}
