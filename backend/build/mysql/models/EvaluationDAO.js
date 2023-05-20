"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluationDAO = void 0;
const initMysql_1 = require("../initMysql");
class EvaluationDAO {
    getAllEvaluationForOneProject(idProjekta) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT * FROM evaluacija JOIN projekat USING(idProjekta) WHERE idProjekta=?";
                var queryVar = [idProjekta];
                initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows)));
                });
            });
        });
    }
    //  Ova funkcija namv vraca sve evaluaciju za jedan projekat ako joj prosledimo idProjekta. Da iza rows stavimo [0] vratio bi samo jednu, a nama treba sve evaluacije za taj projekat pa ne stavljamo...
    insertEvaluation(evaluation) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "INSERT INTO evaluacija (idProjekta, datumEvaluacije, sugestije, primedbe, zahtevi, statusProjekta, obrazlozenje) VALUES (?, ?, ?, ?, ?, ?, ?)";
            var queryVar = [evaluation.idProjekta, evaluation.datumEvaluacije, evaluation.sugestije, evaluation.primedbe, evaluation.zahtevi, evaluation.statusProjekta, evaluation.obrazlozenje];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
    editEvaluation(evaluation) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "UPDATE evaluacija SET datumEvaluacije = ?, sugestije = ?, primedbe = ?, zahtevi = ?, statusProjekta = ?, obrazlozenje = ? WHERE idEvaluacije = ?";
            var queryVar = [evaluation.datumEvaluacije, evaluation.sugestije, evaluation.primedbe, evaluation.zahtevi, evaluation.statusProjekta, evaluation.obrazlozenje, evaluation.idEvaluacije];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
    deleteEvaluation(idEvaluacije) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "DELETE FROM evaluacija WHERE idEvaluacije=?";
            var queryVar = [idEvaluacije];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
}
exports.evaluationDAO = new EvaluationDAO();
//# sourceMappingURL=EvaluationDAO.js.map