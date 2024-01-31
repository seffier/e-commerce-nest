import { Injectable } from '@nestjs/common';
import { FormUserRepository } from '../../../../repository/form/user/form.user.repository';

@Injectable()
export class FormUserFindUsecase {
  constructor(private formUserRepository: FormUserRepository) {}
}
