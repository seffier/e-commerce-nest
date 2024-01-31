import { Injectable } from '@nestjs/common';
import { FormUserRepository } from '../../../../repository/form/user/form.user.repository';
import { FormUserFindByEmailInputDto } from '../../dto/input/form.user.findByEmail.input.dto';
import { SuccessDto } from '../../../dto/success.dto';

@Injectable()
export class FormUserFindUsecase {
  constructor(private formUserRepository: FormUserRepository) {}

  async findByEmail(
    inputDto: FormUserFindByEmailInputDto,
  ): Promise<SuccessDto> {
    return this.formUserRepository.createQueryBuilder('fu').then((query) =>
      query
        .select('fu.Id', 'IdAlias')
        .where('fu.Email = :email', {
          email: inputDto.email,
        })
        .execute()
        .then((email) => {
          return {
            success: !!email[0],
          };
        }),
    );
  }
}
