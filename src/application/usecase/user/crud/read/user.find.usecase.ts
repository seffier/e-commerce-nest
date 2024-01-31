import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../../repository/user/user.repository';
import { UserFindByEmailDto } from '../../dto/input/user.findByEmail.dto';
import { SuccessDto } from '../../../dto/success.dto';
import { UserPasswordOutputDto } from '../../dto/output/user.password.output.dto';

@Injectable()
export class UserFindUsecase {
  constructor(private userRepository: UserRepository) {}

  async checkEmail(inputDto: UserFindByEmailDto): Promise<SuccessDto> {
    return this.userRepository.createQueryBuilder('user').then((query) =>
      query
        .innerJoinAndSelect('formuser', 'fu', 'user.FormUserId = fu.Id')
        .where('fu.Email = :email', {
          email: inputDto.email,
        })
        .andWhere('user.isDeleted = 0')
        .getOne()
        .then((user) => {
          return {
            success: !!user,
          };
        }),
    );
  }

  async getPassword(
    inputDto: UserFindByEmailDto,
  ): Promise<UserPasswordOutputDto> {
    return this.userRepository.createQueryBuilder('user').then((query) =>
      query
        .select('user.UniqueKey', 'uniqueKeyAlias')
        .addSelect('fu.PasswordHash', 'passwordHashAlias')
        .innerJoin('user.formUser', 'fu') // Presuming a relation named 'formUser' exists on the User entity
        .where('fu.Email = :email', { email: inputDto.email })
        .andWhere('user.isDeleted = 0') // Optionally check if the user is not deleted (if applicable)
        .getRawOne()
        .then((user) => {
          console.log('user: ', user);
          return {
            passwordHash: user.passwordHashAlias,
          };
        }),
    );
  }
}
