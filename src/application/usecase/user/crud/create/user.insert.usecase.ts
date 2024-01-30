import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../../repository/user/user.repository';
import { UserInsertInputDto } from '../../dto/input/user.insert.input.dto';

@Injectable()
export class UserInsertUsecase {
  constructor(private userRepository: UserRepository) {}

  async register(inputDto: UserInsertInputDto): Promise<boolean> {
    return this.userRepository
      .insert({
        UniqueKey: 'test',
        FormUserId: inputDto.formUserId,
      })
      .then(() => {
        return true;
      });
  }
}
