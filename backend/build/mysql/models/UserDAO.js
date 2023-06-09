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
exports.userDAO = void 0;
const initMysql_1 = require("../initMysql");
class UserDAO {
    login(username, lozinka) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT * FROM rukovodioc WHERE " + " username=? and lozinka=?";
                var queryVar = [username, lozinka];
                initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows))[0]);
                });
            });
        });
    }
    // saljemo korisnicko ime i lozinku a treba da dobijemp promise ili je odbijen
    // selektujemo sve , izvrsimo query i ako nije greska vraca promise sa podacima
    // on kao podatke daje redove iz tabele i da bi dobili objekte, pretvorimo u string
    // pa u json objekte, i uzmem samo prvi jer ce sigurno biti samo jedan sa tim kor_imenom
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "INSERT INTO rukovodioc (username, lozinka, ime, prezime, datumRodjenja, mailRukovodioca, telefon, pregledPodnetih, idInstitucije) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            var queryVar = [user.username, user.lozinka, user.ime, user.prezime, user.datumRodjenja, user.mailRukovodioca, user.telefon, user.pregledPodnetih, user.idInstitucije];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT * FROM rukovodioc JOIN institucija USING (idInstitucije)";
                initMysql_1.dbConnection.query(sqlQuery, null, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows)));
                });
            });
        });
    }
    editUser(korisnik) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "UPDATE rukovodioc SET lozinka = ?, ime = ?, prezime = ?, datumRodjenja = ?, mailRukovodioca = ?, telefon = ? WHERE idRukovodioca = ?";
            var queryVar = [korisnik.lozinka, korisnik.ime, korisnik.prezime, korisnik.datumRodjenja, korisnik.mailRukovodioca, korisnik.telefon, korisnik.idRukovodioca];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
}
exports.userDAO = new UserDAO();
//# sourceMappingURL=UserDAO.js.map