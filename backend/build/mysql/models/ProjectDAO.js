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
exports.projectDAO = void 0;
const initMysql_1 = require("../initMysql");
class ProjectDAO {
    getAllProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT * FROM projekat JOIN rukovodioc USING (idRukovodioca) JOIN institucija USING (idInstitucije) WHERE snimanjeProjekta='predat'";
                initMysql_1.dbConnection.query(sqlQuery, null, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows)));
                });
            });
        });
    }
    // Dohvata sve projekte koji su predati (mogu biti snimljenii, ako rukovodioc nije uneo sve podatke i predat)
    getAllProjectsUser(idRukovodioca) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT * FROM projekat JOIN rukovodioc USING (idRukovodioca) JOIN institucija USING (idInstitucije) WHERE idRukovodioca = ? ";
                var queryVar = [idRukovodioca];
                initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows)));
                });
            });
        });
    }
    //  da iza rows stavimo [0] vratio bi samo prvi red, a nama treba svi koji su za taj idRukovodioc
    insertProject(project) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "INSERT INTO projekat (idRukovodioca, nazivProjekta, datumProjekta, akronim, apstraktSrp, apstraktEng, ukupanBudzet, snimanjeProjekta, podprogram, projekatInst1, projekatInst2, projekatInst3, projekatInst4, projekatInst5, projekatOblast1, projekatOblast2, projekatOblast3, projekatOblast4, projekatOblast5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            var queryVar = [project.idRukovodioca, project.nazivProjekta, project.datumProjekta, project.akronim, project.apstraktSrp, project.apstraktEng, project.ukupanBudzet, project.snimanjeProjekta, project.podprogram, project.projekatInst1, project.projekatInst2, project.projekatInst3, project.projekatInst4, project.projekatInst5, project.projekatOblast1, project.projekatOblast2, project.projekatOblast3, project.projekatOblast4, project.projekatOblast5];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
    GetOneProject(idProjekta) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT * FROM projekat WHERE idProjekta = ?";
                var queryVar = [idProjekta];
                initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows))[0]); // [0] nam daje prvi sa tim id a to je i jedini
                });
            });
        });
    }
    editProjectStatus(project) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(project);
            var sqlQuery = "UPDATE projekat SET status = ? WHERE idProjekta = ?";
            var queryVar = [project.status, project.idProjekta];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
    editStatus(novi_status, id) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "UPDATE projekat SET status = ? WHERE idProjekta = ?";
            var queryVar = [novi_status, id];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
}
exports.projectDAO = new ProjectDAO();
//# sourceMappingURL=ProjectDAO.js.map