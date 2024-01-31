import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PasswordHashFetcher } from '../../hash/hash.abstract.service';
import { BcryptFetcherService } from '../../hash/service/bcrypt.fetcher.service';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: PasswordHashFetcher,
      useFactory: async () => {
        return new BcryptFetcherService();
      },
      inject: [ConfigService],
    },
  ],
  exports: [PasswordHashFetcher],
})
export class PasswordHashModule {}
