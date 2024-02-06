import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { IBaseApplicationEntity } from '../../../entity/application/IBaseApplication.entity';

export abstract class ApplicationBase implements IBaseApplicationEntity {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  Name: string;
}
