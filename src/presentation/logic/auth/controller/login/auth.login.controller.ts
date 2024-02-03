import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthLoginService } from '../../service/login/auth.login.service';
import { AuthLoginRequestDto } from '../../dto/request/login/auth.login.request.dto';
import { AuthLoginResponseDto } from '../../dto/response/login/auth.login.response.dto';
import { JwtAuthGuard } from 'src/infrastructure/jwt/jwt.guard';

@ApiTags('Authorization')
@Controller('auth')
export class AuthLoginController {
  constructor(private authLoginService: AuthLoginService) {}

  @Post('/login')
  async login(@Body() req: AuthLoginRequestDto): Promise<AuthLoginResponseDto> {
    return await this.authLoginService.login(req);
  }

  @Get('/test')
  @UseGuards(JwtAuthGuard)
  @ApiSecurity('access-token')
  async test(): Promise<boolean> {
    return true;
  }
}
