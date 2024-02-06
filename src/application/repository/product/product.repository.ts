import { SqlRepositoryImpl } from '../sql.repository.impl';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CONNECTION } from '../../../infrastructure/injection/constant.enum';
import { ProductTypeorm } from '../../../domain/model/typeorm/product/product.typeorm';

export class ProductRepository extends SqlRepositoryImpl<ProductTypeorm> {
  constructor(
    @InjectRepository(ProductTypeorm, CONNECTION.MYSQL_ECOMMERCE)
    private productRepository: Repository<ProductTypeorm>,
  ) {
    super();
    this.repository = productRepository;
  }
}
