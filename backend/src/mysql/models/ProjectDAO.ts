import { dbConnection } from "../initMysql";
import { Project } from "./Project";

class ProjectDAO{

    async getAllProjects(): Promise<Project | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM projekat JOIN rukovodioc USING (idRukovodioca)";
            dbConnection.query(sqlQuery, null, function(err, rows){
                if(err) return reject(err);
                 else resolve(JSON.parse(JSON.stringify(rows))) 
            })
        })
    }
        
}

export const projectDAO = new ProjectDAO()