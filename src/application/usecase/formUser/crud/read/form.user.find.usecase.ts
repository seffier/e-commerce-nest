import { Injectable } from '@nestjs/common';
import { FormUserRepository } from '../../../../repository/form/user/form.user.repository';
import { FormUserFindByEmailInputDto } from '../../dto/form.user.find.input.dto';

@Injectable()
export class FormUserFindUsecase {
  constructor(private formUserRepository: FormUserRepository) {}

  async findByEmail(inputDto: FormUserFindByEmailInputDto): Promise<boolean> {
    return this.formUserRepository.createQueryBuilder('fu').then((query) =>
      query
        .select('fu.Id', 'IdAlias')
        .where('fu.Email = :email', {
          email: inputDto.email,
        })
        .execute()
        .then((email) => {
          return !!email[0];
        }),
    );
  }
}
