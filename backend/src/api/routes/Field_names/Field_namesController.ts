import { Body, Controller, Get, Put, Route } from "tsoa";
import { Field_names } from "../../../mysql/models/Field_names";
import { field_namesDAO } from "../../../mysql/models/Field_namesDAO";


@Route("field_names")
export class Field_namesController extends Controller{

    @Get("getAllField_names") 
    async getAllField_names() {
        return await field_namesDAO.getAllField_names();
    }


    @Put("editField_names") 
    async editInstitution(@Body() field_names: Field_names) {
        return await field_namesDAO.editField_names(field_names);
    }

}