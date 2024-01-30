import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthLoginService } from '../../service/login/auth.login.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthLoginController {
  constructor(private authLoginService: AuthLoginService) {}

  @Post('/login')
  async login(): Promise<boolean> {
    return await this.authLoginService.login();
  }
}
