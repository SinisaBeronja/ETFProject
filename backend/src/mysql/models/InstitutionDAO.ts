import { dbConnection } from "../initMysql";
import { Institution } from "./Institution";

class InstitutionDAO{


    async getAllInstitution(): Promise<Institution | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM institucija";
            dbConnection.query(sqlQuery, null, function(err, rows){
                if(err) return reject(err);
                 else resolve(JSON.parse(JSON.stringify(rows))) 
            })
        })
    }


    async insertInstitution(institution: Institution) {
        var sqlQuery = "INSERT INTO institucija (nazivInstSrp, nazivInstEng, nazivSkrInst, adresaInst, gradInst, ovlascenoLiceInst, telefonInst, sifraInstitucije) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        var queryVar = [institution.nazivInstSrp, institution.nazivInstEng, institution.nazivSkrInst, institution.adresaInst, institution.gradInst, institution.ovlascenoLiceInst, institution.telefonInst, institution.sifraInstitucije];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }


    async editInstitution(institution: Institution) {
        var sqlQuery =
            "UPDATE institucija SET nazivInstSrp = ?, nazivInstEng = ?, nazivSkrInst = ?, adresaInst = ?, gradInst = ?, ovlascenoLiceInst = ?, telefonInst = ?, sifraInstitucije = ?  WHERE idInstitucije = ?";
        var queryVar = [institution.nazivInstSrp, institution.nazivInstEng, institution.nazivSkrInst, institution.adresaInst, institution.gradInst, institution.ovlascenoLiceInst, institution.telefonInst, institution.sifraInstitucije, institution.idInstitucije,];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }


    async deleteInstitution(idInstitucije: number) {
        var sqlQuery = "DELETE FROM institucija WHERE idInstitucije=?";
        var queryVar = [idInstitucije];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }


    async searchInstitution(idInstitucije: number): Promise<Institution | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM institucija WHERE idInstitucije = ?";
            var queryVar = [idInstitucije];
            dbConnection.query(sqlQuery, queryVar, function(err, rows){
            if(err) return reject(err);
                else resolve(JSON.parse(JSON.stringify(rows))[0]) 
            })
        })
    }
        //  Ova funkcija namv vraca instituciju ako joj prosledimo id. Da iza rows ne stavimo [0] vratio bi sve npr za like opciju, a mi stavljamo jer znamo da nam treba samo jedan, i to prvi koji nadje. BEZ TOGA NE RADI !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

}

export const institutionDAO = new InstitutionDAO()