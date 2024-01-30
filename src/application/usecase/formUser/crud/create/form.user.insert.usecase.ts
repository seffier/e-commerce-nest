import { FormUserRepository } from '../../../../repository/form/user/form.user.repository';
import { IdDto } from '../../../dto/id.dto';
import { FormUserInsertInputDto } from '../../dto/form.user.insert.input.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FormUserInsertUsecase {
  constructor(private formUserRepository: FormUserRepository) {}

  async register(inputDto: FormUserInsertInputDto): Promise<IdDto> {
    return this.formUserRepository
      .insert({
        FullName: inputDto.fullName,
        Email: inputDto.email,
        PasswordHash: inputDto.passwordHash,
        PhoneNumber: inputDto.phoneNumber,
      })
      .then((user) => {
        return {
          Id: user.Id,
        };
      });
  }
}
