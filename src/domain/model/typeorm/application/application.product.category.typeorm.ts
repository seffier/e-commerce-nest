import { Entity } from 'typeorm';
import { ApplicationBase } from './application.base';
import { IApplicationProductCategoryEntity } from 'src/domain/entity/application/IApplicationProductCategory.entity';

@Entity({
  name: 'applicationproductcategory',
})
export class ApplicationProductCategoryTypeorm
  extends ApplicationBase
  implements IApplicationProductCategoryEntity {}
