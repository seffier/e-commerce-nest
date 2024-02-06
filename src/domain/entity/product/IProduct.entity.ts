import { IBaseSchemaEntity } from '../IBaseSchema.entity';

export interface IProductEntity extends IBaseSchemaEntity {
  UniqueKey: string;
  ProductId: number;
  OwnerId: number;
  FormProductId: number;
  ProductCategoryId: number;
  ProductBrandId: number;
  InsertedDate: Date;
  UpdatedDate: Date;
  DeletedDate: Date;
  IsDeleted: boolean;
}
