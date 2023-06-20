import { dbConnection } from "../initMysql";
import { Fajlovi } from "./fajlovi";


class FajloviDAO{


    async getAllFilesForOneProject(idProjekta: number): Promise<Fajlovi | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM fajlovi JOIN projekat USING(idProjekta) WHERE idProjekta=?"; 
            var queryVar = [idProjekta];
            dbConnection.query(sqlQuery, queryVar, function(err, rows){
                if(err) return reject(err);
                 else resolve(JSON.parse(JSON.stringify(rows))) 
            })
        })
    }
    //  Ova funkcija namv vraca sve fajlove za jedan projekat ako joj prosledimo idProjekta. Da iza rows stavimo [0] vratio bi samo jednu, a nama treba sve evaluacije za taj projekat pa ne stavljamo...

    async getFilesProject(naziv: string): Promise<Fajlovi | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT projekat.idProjekta, opisProjekta1, opisProjekta2, budzetProjekta, gantogramProjekta, prezentacijaProjekta, izjaveProjekta, biografijaProjekta, etickeSaglasnostiProjekta, uticajProjekta, pismaPodrske, biznisPlanProjekta, dodatnaDokumentacija FROM fajlovi JOIN projekat WHERE fajlovi.naziv = projekat.nazivProjekta AND naziv = ?;"; 
            var queryVar = [naziv];
            dbConnection.query(sqlQuery, queryVar, function(err, rows){
                if(err) return reject(err);
                 else resolve(JSON.parse(JSON.stringify(rows))) 
            })
        })
    }

    async insertFiles(fajlovi: Fajlovi) {
        var sqlQuery = "INSERT INTO fajlovi (idProjekta, opisProjekta1, opisProjekta2, budzetProjekta, gantogramProjekta, prezentacijaProjekta, izjaveProjekta, biografijaProjekta, etickeSaglasnostiProjekta, uticajProjekta, pismaPodrske, biznisPlanProjekta, dodatnaDokumentacija, naziv) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        var queryVar = [fajlovi.idProjekta, fajlovi.opisProjekta1, fajlovi.opisProjekta2, fajlovi.budzetProjekta, fajlovi.gantogramProjekta, fajlovi.prezentacijaProjekta,  fajlovi.izjaveProjekta, fajlovi.biografijaProjekta, fajlovi.etickeSaglasnostiProjekta, fajlovi.uticajProjekta, fajlovi.pismaPodrske, fajlovi.biznisPlanProjekta, fajlovi.dodatnaDokumentacija, fajlovi.naziv]; 
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});   
    }
 

}

export const fajloviDAO = new FajloviDAO()