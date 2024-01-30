import { IFormUserEntity } from '../../../../entity/form/IFormUser.entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

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
  UpdatedDate: string;
}
