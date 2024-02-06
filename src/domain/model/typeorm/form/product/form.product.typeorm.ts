import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IFormProductEntity } from '../../../../entity/form/IFormProduct.entity';

@Entity({
  name: 'formproduct',
})
export class FormProductTypeorm implements IFormProductEntity {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  ProductName: string;
  @Column()
  ProductDescription: string;
  @Column()
  Price: number;
  @Column()
  TotalAmount: number;
  @Column()
  UpdatedDate: Date;
}
