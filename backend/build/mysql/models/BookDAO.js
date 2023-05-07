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
exports.bookDAO = void 0;
const initMysql_1 = require("../initMysql");
class BookDAO {
    searchBooks(naziv) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT * FROM knjige " + "WHERE naziv LIKE ?";
                var queryVar = ["%" + naziv + "%"];
                initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows)));
                });
            });
        });
    }
    //  da iza rows stavimo [0] vratio bi samo prvi red, a nama treba svi koji su like
    insertBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "INSERT INTO knjige VALUES (?, ?, ?, ?)";
            var queryVar = [
                book.isbn,
                book.naziv,
                book.godina_izdanja,
                book.stranica,
            ];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
    // nista ne vracamo nazad klijentu
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var sqlQuery = "SELECT * FROM knjige";
                initMysql_1.dbConnection.query(sqlQuery, null, function (err, rows) {
                    if (err)
                        return reject(err);
                    else
                        resolve(JSON.parse(JSON.stringify(rows)));
                });
            });
        });
    }
    deleteBook(isbn) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "DELETE FROM knjige WHERE isbn=?";
            var queryVar = [isbn];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
    editBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            var sqlQuery = "UPDATE knjige SET naziv =?, godina_izdanja=?, stranica=? WHERE isbn=?";
            var queryVar = [
                book.naziv,
                book.godina_izdanja,
                book.stranica,
                book.isbn,
            ];
            initMysql_1.dbConnection.query(sqlQuery, queryVar, function (err, rows) { });
        });
    }
}
exports.bookDAO = new BookDAO();
//# sourceMappingURL=BookDAO.js.map