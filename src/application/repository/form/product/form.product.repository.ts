import { SqlRepositoryImpl } from '../../sql.repository.impl';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormProductTypeorm } from '../../../../domain/model/typeorm/form/product/form.product.typeorm';
import { CONNECTION } from '../../../../infrastructure/injection/constant.enum';

export class FormProductRepository extends SqlRepositoryImpl<FormProductTypeorm> {
  constructor(
    @InjectRepository(FormProductTypeorm, CONNECTION.MYSQL_ECOMMERCE)
    private formProductRepository: Repository<FormProductTypeorm>,
  ) {
    super();
    this.repository = formProductRepository;
  }
}
