import { dbConnection } from "../initMysql";
import { Field_names } from "./Field_names";

class Field_namesDAO{

    async getAllField_names(): Promise<Field_names | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM nazivi_polja";
            dbConnection.query(sqlQuery, null, function(err, rows){
                if(err) return reject(err);
                 else resolve(JSON.parse(JSON.stringify(rows))) 
            })
        })
    } 

    async editField_names(field_names: Field_names) { 
        var sqlQuery =
            "UPDATE nazivi_polja SET polje1 = ?, polje2 = ?, polje3 = ?, polje4 = ?, polje5 = ?, polje6 = ?, polje7 = ?, polje8 = ?, polje9 = ?, polje10 = ?, polje11 = ?, polje12 = ?  WHERE idNazivi_polja = ?";
        var queryVar = [field_names.polje1, field_names.polje2, field_names.polje3, field_names.polje4, field_names.polje5, field_names.polje6, field_names.polje7, field_names.polje8, field_names.polje9,field_names.polje10, field_names.polje11, field_names.polje12, field_names.idNazivi_polja];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }

}

export const field_namesDAO = new Field_namesDAO()