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
                var sqlQuery = "SELECT * FROM projekat JOIN rukovodioc USING (idRukovodioca) JOIN institucija USING (idInstitucije)";
                initMysql_1.dbConnection.query(sqlQuery, null, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows)));
                });
            });
        });
    }
    insertProject(project) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "INSERT INTO projekat (nazivProjekta, datumProjekta, akronim, apstraktSrp, apstraktEng, ukupanBudzet, snimanjeProjekta, podprogram) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            var queryVar = [project.nazivProjekta, project.datumProjekta, project.akronim, project.apstraktSrp, project.apstraktEng, project.ukupanBudzet, project.snimanjeProjekta, project.podprogram];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
}
exports.projectDAO = new ProjectDAO();
//# sourceMappingURL=ProjectDAO.js.map