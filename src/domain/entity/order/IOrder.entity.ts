import { IBaseSchemaEntity } from '../IBaseSchema.entity';

export interface IOrderEntity extends IBaseSchemaEntity {
  UniqueKey: string;
  ProductId: number;
  UserId: number;
  BuyAmount: number;
  OrderStateId: number;
  InsertedDate: Date;
  UpdatedDate: Date;
  DeletedDate: Date;
  IsDeleted: boolean;
}
