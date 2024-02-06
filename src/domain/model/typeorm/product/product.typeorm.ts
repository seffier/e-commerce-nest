import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IProductEntity } from '../../../entity/product/IProduct.entity';

@Entity({
  name: 'product',
})
export class ProductTypeorm implements IProductEntity {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  UniqueKey: string;
  @Column()
  ProductId: number;
  @Column()
  OwnerId: number;
  @Column()
  FormProductId: number;
  @Column()
  ProductCategoryId: number;
  @Column()
  ProductBrandId: number;
  @Column()
  InsertedDate: Date;
  @Column()
  UpdatedDate: Date;
  @Column()
  DeletedDate: Date;
  @Column()
  IsDeleted: boolean;
}
