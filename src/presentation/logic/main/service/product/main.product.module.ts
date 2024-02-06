import { Module } from '@nestjs/common';
import { MainProductService } from './main.product.service';
import { ProductAppModule } from '../../../../../application/injection/main/product.application.module';
import { MainProductController } from '../../controller/product/main.product.controller';

@Module({
  imports: [ProductAppModule],
  providers: [MainProductService],
  exports: [MainProductService],
  controllers: [MainProductController],
})
export class MainProductModule {}
