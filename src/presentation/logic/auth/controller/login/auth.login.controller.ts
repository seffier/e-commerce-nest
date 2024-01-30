import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authorization')
@Controller('auth')
export class AuthLoginController {
  @Post('/login')
  async login(): Promise<string> {
    return 'login success';
  }
}
