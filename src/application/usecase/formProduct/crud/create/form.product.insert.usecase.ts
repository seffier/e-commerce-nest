import { Injectable } from '@nestjs/common';
import { FormProductInsertInputDto } from '../../dto/input/form.product.insert.input.dto';
import { IdDto } from '../../../dto/id.dto';
import { FormProductRepository } from '../../../../repository/form/product/form.product.repository';

@Injectable()
export class FormProductInsertUsecase {
  constructor(private formProductRepository: FormProductRepository) {}

  async register(inputDto: FormProductInsertInputDto): Promise<IdDto> {
    return this.formProductRepository
      .insert({
        ProductName: inputDto.productName,
        ProductDescription: inputDto.productDescription,
        Price: inputDto.price,
        TotalAmount: inputDto.totalAmount,
      })
      .then((product) => {
        return {
          Id: product.Id,
        };
      });
  }
}
