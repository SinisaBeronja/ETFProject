import { Body, Controller, Delete, Get, Path, Post, Put, Route } from "tsoa";
import { Evaluation } from "../../../mysql/models/Evaluation";
import { Fajlovi } from "../../../mysql/models/fajlovi";
import { fajloviDAO } from "../../../mysql/models/FajloviDAO";
import { Project } from "../../../mysql/models/Project";
import { projectDAO } from "../../../mysql/models/ProjectDAO";

@Route("files") 
export class FilesController extends Controller{

    //@Get("getAllEvaluationForOneProject/{idProjekta}")
//    async getAllEvaluationForOneProject(@Path() idProjekta: number):Promise<Evaluation | null>{
  //      return await evaluationDAO.getAllEvaluationForOneProject(idProjekta)
    //}

    @Post("insertFiles")  
    async insertEvaluation(@Body() fajlovi: Fajlovi) {
        let result = await fajloviDAO.insertFiles(fajlovi);
        // ovde treba da pozove projectDAO.editSnimanje da upise Predat u snimanjeProjekta
        // await projectDAO.editSnimanje("Snimljen", fajlovi.idProjekta)
        // ODUSTAO SAM od toga, dovoljno je sto je status dorada da user moze da menja polja!!!
        return result; 
    }

   
    
}