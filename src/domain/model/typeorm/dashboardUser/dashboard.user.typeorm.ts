import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FormUserTypeorm } from '../form/user/form.user.typeorm';
import { IDashboardUserEntity } from '../../../entity/dashboardUser/IDashboardUser.entity';

@Entity({
  name: 'dashboarduser',
})
export class DashboardUserTypeorm implements IDashboardUserEntity {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  UniqueKey: string;
  @Column()
  FormUserId: number;
  @Column()
  EmailConfirmed: boolean;
  @Column()
  InsertedDate: Date;
  @Column()
  UpdatedDate: Date;
  @Column()
  DeletedDate: Date;
  @Column()
  IsDeleted: boolean;
  @ManyToOne(() => FormUserTypeorm, (formUser) => formUser.dashboardUser)
  @JoinColumn({ name: 'FormUserId' })
  formUser: FormUserTypeorm;
}
