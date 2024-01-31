import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PasswordHashFetcher } from '../hash.abstract.service';

@Injectable()
export class BcryptFetcherService implements PasswordHashFetcher {
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // adjust the number of salt rounds as needed.
    return await bcrypt.hash(password, saltRounds);
  }

  async comparePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
