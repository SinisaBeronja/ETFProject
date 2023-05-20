import { Body, Controller, Delete, Get, Path, Post, Put, Route } from "tsoa";
import { Evaluation } from "../../../mysql/models/Evaluation";
import { evaluationDAO } from "../../../mysql/models/EvaluationDAO";

@Route("evaluation")
export class EvaluationController extends Controller{

    @Get("getAllEvaluationForOneProject/{idProjekta}")
    async getAllEvaluationForOneProject(@Path() idProjekta: number):Promise<Evaluation | null>{
        return await evaluationDAO.getAllEvaluationForOneProject(idProjekta)
    }

    @Post("")
    async insertEvaluation(@Body() evaluation: Evaluation) {
        let result = await evaluationDAO.insertEvaluation(evaluation);
        return result;
    }

    @Put("editEvaluation")
    async editEvaluation(@Body() evaluation: Evaluation) {
        return await evaluationDAO.editEvaluation(evaluation);
    }

    @Delete("deleteEvaluation/{idEvaluacije}")
    async deleteEvaluation(@Path() idEvaluacije:number) {
        return await evaluationDAO.deleteEvaluation(idEvaluacije);
    }
    

    
}