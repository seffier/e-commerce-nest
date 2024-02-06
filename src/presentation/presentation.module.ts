import { Module } from '@nestjs/common';
import { AuthModule } from './logic/auth/modules/auth.module';
import { MainProductModule } from './logic/main/service/product/main.product.module';

@Module({
  imports: [AuthModule, MainProductModule],
})
export class PresentationModule {}
