import { Body, Controller, Get, Put, Route } from "tsoa";
import { ProjektiZaIzmenu } from "../../../mysql/models/ProjektiZaIzmenu";
import { projektiZaizmenuDAO } from "../../../mysql/models/ProjektiZaIzmenuDAO";

@Route("projektizaizmenu")

export class ProjektizaizmenuController extends Controller{

    @Get("getAllProjektizaizmenu") 
    async getAllProjektizaizmenu() {
        return await projektiZaizmenuDAO.getAllProjektiZaIzmenu();
    }


    @Put("editProjektizaizmenu") 
    async editProjektizaizmenu(@Body() projekatzaizmenu: ProjektiZaIzmenu) {
        return await projektiZaizmenuDAO.editProjekatpolje(projekatzaizmenu);
    }

}
