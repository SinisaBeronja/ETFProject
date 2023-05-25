import { dbConnection } from "../initMysql";
import { Project } from "./Project";

class ProjectDAO{

    async getAllProjects(): Promise<Project | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM projekat JOIN rukovodioc USING (idRukovodioca) JOIN institucija USING (idInstitucije) WHERE snimanjeProjekta='predat'";
            dbConnection.query(sqlQuery, null, function(err, rows){
                if(err) return reject(err);
                 else resolve(JSON.parse(JSON.stringify(rows))) 
            }) 
        })
    }
    // Dohvata sve projekte koji su predati (mogu biti snimljenii, ako rukovodioc nije uneo sve podatke i predat)


    async getAllProjectsUser(idRukovodioca: number): Promise<Project | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM projekat JOIN rukovodioc USING (idRukovodioca) JOIN institucija USING (idInstitucije) WHERE idRukovodioca = ? ";
            var queryVar = [idRukovodioca];
            dbConnection.query(sqlQuery, queryVar, function(err, rows){
                if(err) return reject(err);
                 else resolve(JSON.parse(JSON.stringify(rows))) 
            })
        })
    }
     //  da iza rows stavimo [0] vratio bi samo prvi red, a nama treba svi koji su za taj idRukovodioc
        


    async insertProject(project: Project){
        var sqlQuery = "INSERT INTO projekat (idRukovodioca, nazivProjekta, datumProjekta, akronim, apstraktSrp, apstraktEng, ukupanBudzet, snimanjeProjekta, podprogram, projekatInst1, projekatInst2, projekatInst3, projekatInst4, projekatInst5, projekatOblast1, projekatOblast2, projekatOblast3, projekatOblast4, projekatOblast5) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        var queryVar = [project.idRukovodioca, project.nazivProjekta, project.datumProjekta, project.akronim, project.apstraktSrp, project.apstraktEng, project.ukupanBudzet, project.snimanjeProjekta, project.podprogram, project.projekatInst1, project.projekatInst2, project.projekatInst3, project.projekatInst4, project.projekatInst5, project.projekatOblast1, project. projekatOblast2, project.projekatOblast3, project.projekatOblast4, project. projekatOblast5]; 
        dbConnection.query(sqlQuery, queryVar, function(err, rows){})
    }   


     async GetOneProject(idProjekta: number): Promise<Project | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM projekat WHERE idProjekta = ?";
            var queryVar = [idProjekta];
            dbConnection.query(sqlQuery, queryVar, function(err, rows){
                if(err) return reject(err);
                else resolve(JSON.parse(JSON.stringify(rows))[0]) // [0] nam daje prvi sa tim id a to je i jedini
            })
         }) 
      }
          
    async editProjectStatus(project: Project) { 
        var sqlQuery =
            "UPDATE projekat SET status = ? WHERE idProjekta = ?";
        var queryVar = [project.status, project.idProjekta];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }

    async editStatus(novi_status: string, id:number) { 
        var sqlQuery =
            "UPDATE projekat SET status = ? WHERE idProjekta = ?";
        var queryVar = [novi_status, id];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }

}

export const projectDAO = new ProjectDAO() 
