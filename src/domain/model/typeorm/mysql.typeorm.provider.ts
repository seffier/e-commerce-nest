import { UserTypeorm } from './user/user.typeorm';
import { FormUserTypeorm } from './form/user/form.user.typeorm';
import { FormProductTypeorm } from './form/product/form.product.typeorm';
import { ApplicationProductCategoryTypeorm } from './application/application.product.category.typeorm';
import { ApplicationProductBrandTypeorm } from './application/application.product.brand.typeorm';
import { ApplicationOrderStateTypeorm } from './application/application.order.state.typeorm';
import { ProductTypeorm } from './product/product.typeorm';
import { OrderTypeorm } from './order/order.typeorm';
import { DashboardUserTypeorm } from './dashboardUser/dashboard.user.typeorm';

export const MysqlTypeormProvider = [
  UserTypeorm,
  DashboardUserTypeorm,
  FormUserTypeorm,
  FormProductTypeorm,
  ProductTypeorm,
  OrderTypeorm,
  ApplicationProductCategoryTypeorm,
  ApplicationProductBrandTypeorm,
  ApplicationOrderStateTypeorm,
];
