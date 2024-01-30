import { Module } from '@nestjs/common';
import { AuthModule } from './logic/auth/modules/auth.module';

@Module({
  imports: [AuthModule],
})
export class PresentationModule {}
