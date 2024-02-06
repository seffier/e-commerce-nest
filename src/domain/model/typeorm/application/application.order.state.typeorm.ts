import { Entity } from 'typeorm';
import { ApplicationBase } from './application.base';
import { IApplicationOrderStateEntity } from '../../../entity/application/IApplicationOrderState.entity';

@Entity({
  name: 'applicationorderstate',
})
export class ApplicationOrderStateTypeorm
  extends ApplicationBase
  implements IApplicationOrderStateEntity {}
