import { IBaseSchemaEntity } from '../IBaseSchema.entity';

export interface IDashboardUserEntity extends IBaseSchemaEntity {
  UniqueKey: string;
  FormUserId: number;
  EmailConfirmed: boolean;
  InsertedDate: Date;
  UpdatedDate: Date;
  DeletedDate: Date;
  IsDeleted: boolean;
}
