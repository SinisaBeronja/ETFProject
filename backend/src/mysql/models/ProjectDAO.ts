import { dbConnection } from "../initMysql";
import { Project } from "./Project";

class ProjectDAO{

    async getAllProjects(): Promise<Project | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM projekat JOIN rukovodioc USING (idRukovodioca) JOIN institucija USING (idInstitucije)";
            dbConnection.query(sqlQuery, null, function(err, rows){
                if(err) return reject(err);
                 else resolve(JSON.parse(JSON.stringify(rows))) 
            })
        })
    }
        


    async insertProject(project: Project){
        var sqlQuery = "INSERT INTO projekat (nazivProjekta, datumProjekta, akronim, apstraktSrp, apstraktEng, ukupanBudzet, snimanjeProjekta, podprogram) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        var queryVar = [project.nazivProjekta, project.datumProjekta, project.akronim, project.apstraktSrp, project.apstraktEng, project.ukupanBudzet, project.snimanjeProjekta, project.podprogram];
        dbConnection.query(sqlQuery, queryVar, function(err, rows){})
    }  

}

export const projectDAO = new ProjectDAO()
