import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthRegisterService } from '../../service/register/auth.register.service';
import { AuthRegisterRequestDto } from '../../dto/request/register/auth.register.request.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthRegisterController {
  constructor(private authRegisterService: AuthRegisterService) {}
  @Post('/register')
  async register(@Body() req: AuthRegisterRequestDto): Promise<boolean> {
    return await this.authRegisterService.register(req);
  }
}
