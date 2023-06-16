import { dbConnection } from "../initMysql";
import { Project } from "./Project";

class ProjectDAO{

    async getAllProjects(): Promise<Project | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM projekat JOIN rukovodioc USING (idRukovodioca) JOIN institucija USING (idInstitucije) WHERE snimanjeProjekta='Predat'";
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
        var sqlQuery = "INSERT INTO projekat (idRukovodioca, nazivProjekta, datumProjekta, akronim, apstraktSrp, apstraktEng, ukupanBudzet, snimanjeProjekta, podprogram, projekatInst1, projekatInst2, projekatInst3, projekatInst4, projekatInst5, projekatOblast1, projekatOblast2, projekatOblast3, projekatOblast4, projekatOblast5, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        var queryVar = [project.idRukovodioca, project.nazivProjekta, project.datumProjekta, project.akronim, project.apstraktSrp, project.apstraktEng, project.ukupanBudzet, project.snimanjeProjekta, project.podprogram, project.projekatInst1, project.projekatInst2, project.projekatInst3, project.projekatInst4, project.projekatInst5, project.projekatOblast1, project.projekatOblast2, project.projekatOblast3, project.projekatOblast4, project. projekatOblast5, project.status]; 
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
        console.log(project)
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

    async editSnimanje(novo_snimanje: string, id:number) { 
        var sqlQuery =
            "UPDATE projekat SET snimanjeProjekta = ? WHERE idProjekta = ?";
        var queryVar = [novo_snimanje, id];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }

    async deleteProjectFirstPage(nazivProjekta: string){
        var sqlQuery = "DELETE FROM projekat WHERE nazivProjekta = ?";
        var queryVar = [nazivProjekta];
        dbConnection.query(sqlQuery, queryVar, function(err, rows){})
        }
    

    async editOneProject(projekat: Project) {  
        var sqlQuery = 
             "UPDATE projekat SET datumProjekta = ?, akronim = ?, apstraktSrp = ?, apstraktEng = ?, ukupanBudzet = ?, podprogram = ?, projekatInst1 = ?, projekatInst2 = ?, projekatInst3 = ?, projekatInst4 = ?, projekatInst5 = ?, projekatOblast1 = ?, projekatOblast2 = ?, projekatOblast3 = ?, projekatOblast4 = ?, projekatOblast5 = ? WHERE idProjekta = ?";
        var queryVar = [projekat.datumProjekta, projekat.akronim, projekat.apstraktSrp, projekat.apstraktEng, projekat.ukupanBudzet, projekat.podprogram, projekat.projekatInst1, projekat.projekatInst2, projekat.projekatInst3, projekat.projekatInst4, projekat.projekatInst5, projekat.projekatOblast1, projekat.projekatOblast2, projekat.projekatOblast3, projekat.projekatOblast4, projekat.projekatOblast5, projekat.idProjekta];
         dbConnection.query(sqlQuery, queryVar, function (err, rows) {});  
    }   
        
    async projectUpdate(projekat: Project) {  
        var sqlQuery =
            "UPDATE projekat JOIN rukovodioc USING (idRukovodioca) JOIN institucija USING (idInstitucije) SET datumProjekta = ?, akronim = ?, apstraktSrp = ?, apstraktEng = ?, ukupanBudzet = ?, podprogram = ?, projekatInst1 = ?, projekatInst2 = ?, projekatInst3 = ?, projekatInst4 = ?, projekatInst5 = ?, projekatOblast1 = ?, projekatOblast2 = ?, projekatOblast3 = ?, projekatOblast4 = ?, projekatOblast5 = ? WHERE idProjekta = ?";
            var queryVar = [projekat.datumProjekta, projekat.akronim, projekat.apstraktSrp, projekat.apstraktEng, projekat.ukupanBudzet, projekat.podprogram, projekat.projekatInst1, projekat.projekatInst2, projekat.projekatInst3, projekat.projekatInst4, projekat.projekatInst5, projekat.projekatOblast1, projekat.projekatOblast2, projekat.projekatOblast3, projekat.projekatOblast4, projekat.projekatOblast5, projekat.idProjekta];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }

}

export const projectDAO = new ProjectDAO() 
