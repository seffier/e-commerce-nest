import { UserTypeorm } from './user/user.typeorm';
import { FormUserTypeorm } from './form/user/form.user.typeorm';
import { FormProductTypeorm } from './form/product/form.product.typeorm';

export const MysqlTypeormProvider = [UserTypeorm, FormUserTypeorm, FormProductTypeorm];
