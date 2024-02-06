import { IOrderEntity } from 'src/domain/entity/order/IOrder.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'order',
})
export class OrderTypeorm implements IOrderEntity {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  UniqueKey: string;
  @Column()
  ProductId: number;
  @Column()
  UserId: number;
  @Column()
  BuyAmount: number;
  @Column()
  OrderStateId: number;
  @Column()
  InsertedDate: Date;
  @Column()
  UpdatedDate: Date;
  @Column()
  DeletedDate: Date;
  @Column()
  IsDeleted: boolean;
}
