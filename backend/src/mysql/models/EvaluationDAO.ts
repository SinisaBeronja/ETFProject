import { dbConnection } from "../initMysql";
import { Evaluation } from "./Evaluation";

class EvaluationDAO{


    async getAllEvaluationForOneProject(idProjekta: number): Promise<Evaluation | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM evaluacija JOIN projekat USING(idProjekta) WHERE idProjekta=?";
            var queryVar = [idProjekta];
            dbConnection.query(sqlQuery, queryVar, function(err, rows){
                if(err) return reject(err);
                 else resolve(JSON.parse(JSON.stringify(rows))) 
            })
        })
    }
    //  Ova funkcija namv vraca sve evaluaciju za jedan projekat ako joj prosledimo idProjekta. Da iza rows stavimo [0] vratio bi samo jednu, a nama treba sve evaluacije za taj projekat pa ne stavljamo...


    async insertEvaluation(evaluation: Evaluation) {
        var sqlQuery = "INSERT INTO evaluacija (idProjekta, datumEvaluacije, sugestije, primedbe, zahtevi, statusProjekta, obrazlozenje) VALUES (?, ?, ?, ?, ?, ?, ?)";
        var queryVar = [evaluation.idProjekta, evaluation.datumEvaluacije, evaluation.sugestije, evaluation.primedbe, evaluation.zahtevi, evaluation.statusProjekta, evaluation.obrazlozenje];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {}); 
    }


    async editEvaluation(evaluation: Evaluation) {
        var sqlQuery =
            "UPDATE evaluacija SET datumEvaluacije = ?, sugestije = ?, primedbe = ?, zahtevi = ?, statusProjekta = ?, obrazlozenje = ? WHERE idEvaluacije = ?";
        var queryVar = [evaluation.datumEvaluacije, evaluation.sugestije, evaluation.primedbe, evaluation.zahtevi, evaluation.statusProjekta, evaluation.obrazlozenje, evaluation.idEvaluacije];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }


    async deleteEvaluation(idEvaluacije: number) {
        var sqlQuery = "DELETE FROM evaluacija WHERE idEvaluacije=?";
        var queryVar = [idEvaluacije];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }
        

}

export const evaluationDAO = new EvaluationDAO()