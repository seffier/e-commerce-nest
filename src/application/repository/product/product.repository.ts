import { ProductTypeorm } from 'src/domain/model/typeorm/product/product.typeorm';
import { SqlRepositoryImpl } from '../sql.repository.impl';
import { InjectRepository } from '@nestjs/typeorm';
import { CONNECTION } from 'src/infrastructure/injection/constant.enum';
import { Repository } from 'typeorm';

export class ProductRepository extends SqlRepositoryImpl<ProductTypeorm> {
  constructor(
    @InjectRepository(ProductTypeorm, CONNECTION.MYSQL_ECOMMERCE)
    private productRepository: Repository<ProductTypeorm>,
  ) {
    super();
    this.repository = productRepository;
  }
}
