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
exports.projektiZaizmenuDAO = void 0;
const initMysql_1 = require("../initMysql");
class ProjektiZaizmenuDAO {
    getAllProjektiZaIzmenu() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT * FROM projekat";
                initMysql_1.dbConnection.query(sqlQuery, null, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows)));
                });
            });
        });
    }
    editProjekatzaizmenu(projekatzaizmenu) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "UPDATE projekat SET datumProjekta = ?, akronim = ?, apstraktSrp = ?, apstraktEng = ?, ukupanBudzet = ?, podprogram = ?, projekatInst1 = ?, projekatInst2 = ?, projekatInst3 = ?, projekatInst4 = ?, projekatInst5 = ?, projekatOblast1 = ?, projekatOblast2 = ?, projekatOblast3 = ?, projekatOblast4 = ?, projekatOblast5 = ? WHERE idProjekta = ?";
            var queryVar = [projekatzaizmenu.datumProjekta, projekatzaizmenu.akronim, projekatzaizmenu.apstraktSrp, projekatzaizmenu.apstraktEng, projekatzaizmenu.ukupanBudzet, projekatzaizmenu.podprogram, projekatzaizmenu.projekatInst1, projekatzaizmenu.projekatInst2, projekatzaizmenu.projekatInst3, projekatzaizmenu.projekatInst4, projekatzaizmenu.projekatInst5, projekatzaizmenu.projekatOblast1, projekatzaizmenu.projekatOblast2, projekatzaizmenu.projekatOblast3, projekatzaizmenu.projekatOblast4, projekatzaizmenu.projekatOblast5, projekatzaizmenu.idProjekta];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
    editProjekatpolje(projekatzaizmenu) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "UPDATE projekat  SET projekatzaizmenu.podprogram = ?  WHERE projekatzaizmenu.idProjekta = ?";
            var queryVar = [projekatzaizmenu.podprogram, projekatzaizmenu.idProjekta];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
}
exports.projektiZaizmenuDAO = new ProjektiZaizmenuDAO();
//# sourceMappingURL=ProjektiZaIzmenuDAO.js.map