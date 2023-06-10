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
exports.field_namesDAO = void 0;
const initMysql_1 = require("../initMysql");
class Field_namesDAO {
    getAllField_names() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT * FROM nazivi_polja";
                initMysql_1.dbConnection.query(sqlQuery, null, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows)));
                });
            });
        });
    }
    editField_names(field_names) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "UPDATE nazivi_polja SET polje1 = ?, polje2 = ?, polje3 = ?, polje4 = ?, polje5 = ?, polje6 = ?, polje7 = ?, polje8 = ?, polje9 = ?, polje10 = ?, polje11 = ?, polje12 = ?  WHERE idNazivi_polja = ?";
            var queryVar = [field_names.polje1, field_names.polje2, field_names.polje3, field_names.polje4, field_names.polje5, field_names.polje6, field_names.polje7, field_names.polje8, field_names.polje9, field_names.polje10, field_names.polje11, field_names.polje12, field_names.idNazivi_polja];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
}
exports.field_namesDAO = new Field_namesDAO();
//# sourceMappingURL=Field_namesDAO.js.map