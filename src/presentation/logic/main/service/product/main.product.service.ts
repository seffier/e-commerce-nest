import { Injectable } from '@nestjs/common';
import { FeaturedProductListResponseDto } from '../../dto/response/product/featured.product.list.response.dto';
import { ProductFindUsecase } from '../../../../../application/usecase/product/crud/read/product.find.usecase';

@Injectable()
export class MainProductService {
  constructor(protected productFindUsecase: ProductFindUsecase) {}

  async featuredProductList(): Promise<FeaturedProductListResponseDto[]> {
    return this.productFindUsecase.find().then((products) => {
      return products.map((product) => ({
        uniqueKey: product.uniqueKey,
        productName: product.productName,
        price: product.price,
        imageUrl: product.imageUrl,
      }));
    });
  }
}
