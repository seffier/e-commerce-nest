import { IBaseSchemaEntity } from '../IBaseSchema.entity';

export interface IFormProductEntity extends IBaseSchemaEntity {
  ProductName: string;
  ProductDescription: string;
  Price: number;
  TotalAmount: number;
  UpdatedDate: Date;
}
