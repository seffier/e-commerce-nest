import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FormProductTypeorm } from "./form.product.typeorm";
import { CONNECTION } from "src/infrastructure/injection/constant.enum";

@Module({
    imports: [
        TypeOrmModule.forFeature([FormProductTypeorm], CONNECTION.MYSQL_ECOMMERCE),
    ],
    exports: [TypeOrmModule],
})
export default class FormProductTypeOrmModule { }