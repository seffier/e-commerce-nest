import { IBaseSchemaEntity } from '../IBaseSchema.entity';

export interface IFormUserEntity extends IBaseSchemaEntity {
  FullName: string;
  Email: string;
  PasswordHash: string;
  PhoneNumber: string;
  UpdatedDate: string;
}
