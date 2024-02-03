import { IFormProductEntity } from "src/domain/entity/form/IFormProduct.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'formproduct'
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