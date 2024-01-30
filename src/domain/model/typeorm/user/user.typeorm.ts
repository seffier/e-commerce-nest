import { IUserEntity } from '../../../entity/user/IUser.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class UserTypeorm implements IUserEntity {
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
}
