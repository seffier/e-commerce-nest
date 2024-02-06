import { Controller, Get } from '@nestjs/common';
import { FeaturedProductListResponseDto } from '../../dto/response/product/featured.product.list.response.dto';
import { ApiTags } from '@nestjs/swagger';
import { MainProductService } from '../../service/product/main.product.service';

@ApiTags('Product')
@Controller('product')
export class MainProductController {
  constructor(private productService: MainProductService) {}

  @Get('featured')
  async featuredProductList(): Promise<FeaturedProductListResponseDto[]> {
    return await this.productService.featuredProductList();
  }
}
