import { Entity } from 'typeorm';
import { ApplicationBase } from './application.base';
import { IApplicationProductBrandEntity } from '../../../entity/application/IApplicationProductBrand.entity';

@Entity({
  name: 'applicationproductbrand',
})
export class ApplicationProductBrandTypeorm
  extends ApplicationBase
  implements IApplicationProductBrandEntity {}
