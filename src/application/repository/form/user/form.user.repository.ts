import { SqlRepositoryImpl } from '../../sql.repository.impl';
import { FormUserTypeorm } from '../../../../domain/model/typeorm/form/user/formUser.typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CONNECTION } from '../../../../infrastructure/injection/constant.enum';
import { Repository } from 'typeorm';

export class FormUserRepository extends SqlRepositoryImpl<FormUserTypeorm> {
  constructor(
    @InjectRepository(FormUserTypeorm, CONNECTION.MYSQL_ECOMMERCE)
    private formUserRepository: Repository<FormUserTypeorm>,
  ) {
    super();
    this.repository = formUserRepository;
  }
}
