import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthLoginService } from '../../service/login/auth.login.service';
import { AuthLoginRequestDto } from '../../dto/request/register/auth.login.request.dto';
import { UniqueKeyDto } from '../../../../../application/usecase/dto/uniqueKey.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthLoginController {
  constructor(private authLoginService: AuthLoginService) {}

  @Post('/login')
  async login(@Body() req: AuthLoginRequestDto): Promise<UniqueKeyDto> {
    return await this.authLoginService.login(req);
  }
}
