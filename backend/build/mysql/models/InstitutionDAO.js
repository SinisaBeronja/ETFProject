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
exports.institutionDAO = void 0;
const initMysql_1 = require("../initMysql");
class InstitutionDAO {
    getAllInstitution() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT * FROM institucija";
                initMysql_1.dbConnection.query(sqlQuery, null, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows)));
                });
            });
        });
    }
    insertInstitution(institution) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "INSERT INTO institucija (nazivInstSrp, nazivInstEng, nazivSkrInst, adresaInst, gradInst, ovlascenoLiceInst, telefonInst, sifraInstitucije) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            var queryVar = [institution.nazivInstSrp, institution.nazivInstEng, institution.nazivSkrInst, institution.adresaInst, institution.gradInst, institution.ovlascenoLiceInst, institution.telefonInst, institution.sifraInstitucije];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
    editInstitution(institution) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "UPDATE institucija SET nazivInstSrp = ?, nazivInstEng = ?, nazivSkrInst = ?, adresaInst = ?, gradInst = ?, ovlascenoLiceInst = ?, telefonInst = ?, sifraInstitucije = ?  WHERE idInstitucije = ?";
            var queryVar = [institution.nazivInstSrp, institution.nazivInstEng, institution.nazivSkrInst, institution.adresaInst, institution.gradInst, institution.ovlascenoLiceInst, institution.telefonInst, institution.sifraInstitucije, institution.idInstitucije,];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
    deleteInstitution(idInstitucije) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "DELETE FROM institucija WHERE idInstitucije=?";
            var queryVar = [idInstitucije];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
}
exports.institutionDAO = new InstitutionDAO();
//# sourceMappingURL=InstitutionDAO.js.map