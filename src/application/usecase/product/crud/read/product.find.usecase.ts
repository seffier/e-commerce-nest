import { Injectable } from '@nestjs/common';
import { ProductFindOutputDto } from '../../dto/output/product.find.output.dto';
import { ProductRepository } from '../../../../repository/product/product.repository';

@Injectable()
export class ProductFindUsecase {
  constructor(private productRepository: ProductRepository) {}

  async find(): Promise<ProductFindOutputDto[]> {
    return this.productRepository.createQueryBuilder('product').then((query) =>
      query
        .innerJoinAndSelect(
          'formproduct',
          'fp',
          'product.FormProductId = fp.Id',
        )
        .select(['fp.ProductName', 'fp.Price', 'product.UniqueKey'])
        .getRawMany()
        .then((products) => {
          return products.map((product) => ({
            productName: product.fp_ProductName,
            price: product.fp_Price,
            uniqueKey: product.product_UniqueKey,
            imageUrl: 'testUrl',
          }));
        }),
    );
  }
}
