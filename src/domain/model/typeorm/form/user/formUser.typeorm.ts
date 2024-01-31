import { IFormUserEntity } from '../../../../entity/form/IFormUser.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserTypeorm } from '../../user/user.typeorm';

@Entity({
  name: 'formuser',
})
export class FormUserTypeorm implements IFormUserEntity {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  FullName: string;
  @Column()
  Email: string;
  @Column()
  PasswordHash: string;
  @Column()
  PhoneNumber: string;
  @Column()
  UpdatedDate: Date;
  @OneToMany(() => UserTypeorm, (user) => user.formUser)
  user: UserTypeorm[];
}
