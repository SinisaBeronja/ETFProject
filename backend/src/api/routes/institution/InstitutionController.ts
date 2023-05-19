import { Body, Controller, Delete, Get, Path, Post, Put, Route } from "tsoa";
import { Institution } from "../../../mysql/models/Institution";
import { institutionDAO } from "../../../mysql/models/InstitutionDAO";

@Route("institution")
export class InstutionController extends Controller{

   
    @Get("getAllInstitution")
    async getAllInstitution() {
        return await institutionDAO.getAllInstitution();
    }

    @Post("")
    async insertInstitution(@Body() institution: Institution) {
        let result = await institutionDAO.insertInstitution(institution);
        return result;
    }

    @Put("editInstitution")
    async editInstitution(@Body() institution: Institution) {
        return await institutionDAO.editInstitution(institution);
    }

    @Delete("deleteInstitution/{idInstitucije}")
    async deleteInstitution(@Path() idInstitucije:number) {
        return await institutionDAO.deleteInstitution(idInstitucije);
    }
    
    @Get("search/{idInstitucije}")
    async searchInstitution(@Path() idInstitucije: number):Promise<Institution | null>{
        return await institutionDAO.searchInstitution(idInstitucije)
    }


}