import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginRequestDto {
  @ApiProperty({ example: 'sefermemis865@mail.com' })
  email: string;
  @ApiProperty({ example: '123456' })
  password: string;
}
