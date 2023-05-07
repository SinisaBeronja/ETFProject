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
exports.oblastDAO = void 0;
const initMysql_1 = require("../initMysql");
class OblastDAO {
    getAllOblast() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT * FROM oblast";
                initMysql_1.dbConnection.query(sqlQuery, null, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows)));
                });
            });
        });
    }
    insertOblast(oblast) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "INSERT INTO oblast (nazivOblasti) VALUES (?)";
            var queryVar = [oblast.nazivOblasti];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
    editOblast(oblast) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "UPDATE oblast SET nazivOblasti =? WHERE idOblasti=?";
            var queryVar = [oblast.nazivOblasti, oblast.idOblasti];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
    deleteOblast(idOblasti) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "DELETE FROM oblast WHERE idOblasti=?";
            var queryVar = [idOblasti];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
}
exports.oblastDAO = new OblastDAO();
//# sourceMappingURL=OblastDAO.js.map