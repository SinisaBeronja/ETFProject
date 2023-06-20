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
exports.fajloviDAO = void 0;
const initMysql_1 = require("../initMysql");
class FajloviDAO {
    getAllFilesForOneProject(idProjekta) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT * FROM fajlovi JOIN projekat USING(idProjekta) WHERE idProjekta=?";
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
    //  Ova funkcija namv vraca sve fajlove za jedan projekat ako joj prosledimo idProjekta. Da iza rows stavimo [0] vratio bi samo jednu, a nama treba sve evaluacije za taj projekat pa ne stavljamo...
    getFilesProject(naziv) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT projekat.idProjekta, opisProjekta1, opisProjekta2, budzetProjekta, gantogramProjekta, prezentacijaProjekta, izjaveProjekta, biografijaProjekta, etickeSaglasnostiProjekta, uticajProjekta, pismaPodrske, biznisPlanProjekta, dodatnaDokumentacija FROM fajlovi JOIN projekat WHERE fajlovi.naziv = projekat.nazivProjekta AND naziv = ?;";
                var queryVar = [naziv];
                initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows)));
                });
            });
        });
    }
    insertFiles(fajlovi) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "INSERT INTO fajlovi (idProjekta, opisProjekta1, opisProjekta2, budzetProjekta, gantogramProjekta, prezentacijaProjekta, izjaveProjekta, biografijaProjekta, etickeSaglasnostiProjekta, uticajProjekta, pismaPodrske, biznisPlanProjekta, dodatnaDokumentacija, naziv) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            var queryVar = [fajlovi.idProjekta, fajlovi.opisProjekta1, fajlovi.opisProjekta2, fajlovi.budzetProjekta, fajlovi.gantogramProjekta, fajlovi.prezentacijaProjekta, fajlovi.izjaveProjekta, fajlovi.biografijaProjekta, fajlovi.etickeSaglasnostiProjekta, fajlovi.uticajProjekta, fajlovi.pismaPodrske, fajlovi.biznisPlanProjekta, fajlovi.dodatnaDokumentacija, fajlovi.naziv];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
}
exports.fajloviDAO = new FajloviDAO();
//# sourceMappingURL=FajloviDAO.js.map