import { IBaseApplicationEntity } from 'src/domain/entity/application/IBaseApplication.entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class ApplicationBase implements IBaseApplicationEntity {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  Name: string;
}
