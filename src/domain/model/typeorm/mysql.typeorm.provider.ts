import { UserTypeorm } from './user/user.typeorm';
import { FormUserTypeorm } from './form/user/form.user.typeorm';
import { FormProductTypeorm } from './form/product/form.product.typeorm';
import { ApplicationProductCategoryTypeorm } from './application/application.product.category.typeorm';
import { ApplicationProductBrandTypeorm } from './application/application.product.brand.typeorm';
import { ApplicationOrderStateTypeorm } from './application/application.order.state.typeorm';
import { ProductTypeorm } from './product/product.typeorm';

export const MysqlTypeormProvider = [
  UserTypeorm,
  FormUserTypeorm,
  FormProductTypeorm,
  ProductTypeorm,
  ApplicationProductCategoryTypeorm,
  ApplicationProductBrandTypeorm,
  ApplicationOrderStateTypeorm,
];
