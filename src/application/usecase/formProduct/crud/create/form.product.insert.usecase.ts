import { Injectable } from "@nestjs/common";
import { FormProductRepository } from "src/application/repository/form/product/form.product.repository";
import { IdDto } from "src/application/usecase/dto/id.dto";
import { FormProductInsertInputDto } from "../../dto/input/form.product.insert.input.dto";

@Injectable()
export class FormProductInsertUsecase {
    constructor(private formProductRepository: FormProductRepository) { }

    async register(inputDto: FormProductInsertInputDto): Promise<IdDto> {
        return this.formProductRepository
            .insert({
                ProductName: inputDto.productName,
                ProductDescription: inputDto.productDescription,
                Price: inputDto.price,
                TotalAmount: inputDto.totalAmount
            })
            .then((product) => {
                return {
                    Id: product.Id
                };
            });
    }
}