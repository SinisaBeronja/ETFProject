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
}

export const field_namesDAO = new Field_namesDAO()