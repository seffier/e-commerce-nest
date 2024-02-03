import { Module, forwardRef } from "@nestjs/common";
import { FormProductRepository } from "./form.product.repository";
import MysqlDbModule from "src/infrastructure/injection/module/mysql.db.module";
import FormProductTypeOrmModule from "src/domain/model/typeorm/form/product/form.product.module";

@Module({
    imports: [MysqlDbModule, forwardRef(() => FormProductTypeOrmModule)],
    providers: [FormProductRepository],
    exports: [FormProductRepository],
})
export default class FormProductRepositoryModule { }