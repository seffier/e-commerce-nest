import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthLoginService {
  constructor() {}

  async login(): Promise<boolean> {
    return true;
  }
}
