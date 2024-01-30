import { SqlRepositoryImpl } from '../sql.repository.impl';
import { UserTypeorm } from '../../../domain/model/typeorm/user/user.typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class UserRepository extends SqlRepositoryImpl<UserTypeorm> {
  constructor(
    @InjectRepository(UserTypeorm, 'MYSQL_E_COMMERCE')
    private userRepository: Repository<UserTypeorm>,
  ) {
    super();
    this.repository = userRepository;
  }
}
