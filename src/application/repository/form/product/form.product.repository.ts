import { FormProductTypeorm } from "src/domain/model/typeorm/form/product/form.product.typeorm";
import { SqlRepositoryImpl } from "../../sql.repository.impl";
import { InjectRepository } from "@nestjs/typeorm";
import { CONNECTION } from "src/infrastructure/injection/constant.enum";
import { Repository } from "typeorm";

export class FormProductRepository extends SqlRepositoryImpl<FormProductTypeorm> {
    constructor(
        @InjectRepository(FormProductTypeorm, CONNECTION.MYSQL_ECOMMERCE)
        private formProductRepository: Repository<FormProductTypeorm>
    ) {
        super();
        this.repository = formProductRepository;
    }
}