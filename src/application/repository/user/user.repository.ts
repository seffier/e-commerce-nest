import { SqlRepositoryImpl } from '../sql.repository.impl';
import { UserTypeorm } from '../../../domain/model/typeorm/user/user.typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CONNECTION } from '../../../infrastructure/injection/constant.enum';

export class UserRepository extends SqlRepositoryImpl<UserTypeorm> {
  constructor(
    @InjectRepository(UserTypeorm, CONNECTION.MYSQL_ECOMMERCE)
    private userRepository: Repository<UserTypeorm>,
  ) {
    super();
    this.repository = userRepository;
  }
}
