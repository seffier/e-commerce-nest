import { UserTypeorm } from './user/user.typeorm';
import { FormUserTypeorm } from './form/user/formUser.typeorm';

export const MysqlTypeormProvider = [UserTypeorm, FormUserTypeorm];
