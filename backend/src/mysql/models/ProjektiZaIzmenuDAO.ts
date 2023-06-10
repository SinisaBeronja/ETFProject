import { dbConnection } from "../initMysql";
import { ProjektiZaIzmenu } from "./ProjektiZaIzmenu";

class ProjektiZaizmenuDAO{

    async getAllProjektiZaIzmenu(): Promise<ProjektiZaIzmenu | null>{
        return new Promise((resolve, reject )=> {
            var sqlQuery = "SELECT * FROM projekat";
            dbConnection.query(sqlQuery, null, function(err, rows){
                if(err) return reject(err);
                 else resolve(JSON.parse(JSON.stringify(rows))) 
            })  
        })
    } 

    async editProjekatzaizmenu(projekatzaizmenu: ProjektiZaIzmenu) {  
        var sqlQuery = 
             "UPDATE projekat SET datumProjekta = ?, akronim = ?, apstraktSrp = ?, apstraktEng = ?, ukupanBudzet = ?, podprogram = ?, projekatInst1 = ?, projekatInst2 = ?, projekatInst3 = ?, projekatInst4 = ?, projekatInst5 = ?, projekatOblast1 = ?, projekatOblast2 = ?, projekatOblast3 = ?, projekatOblast4 = ?, projekatOblast5 = ? WHERE idProjekta = ?";
        var queryVar = [projekatzaizmenu.datumProjekta, projekatzaizmenu.akronim, projekatzaizmenu.apstraktSrp, projekatzaizmenu.apstraktEng, projekatzaizmenu.ukupanBudzet, projekatzaizmenu.podprogram, projekatzaizmenu.projekatInst1, projekatzaizmenu.projekatInst2, projekatzaizmenu.projekatInst3, projekatzaizmenu.projekatInst4, projekatzaizmenu.projekatInst5, projekatzaizmenu.projekatOblast1, projekatzaizmenu.projekatOblast2, projekatzaizmenu.projekatOblast3, projekatzaizmenu.projekatOblast4, projekatzaizmenu.projekatOblast5, projekatzaizmenu.idProjekta];
         dbConnection.query(sqlQuery, queryVar, function (err, rows) {});  
    }   

    async editProjekatpolje(projekatzaizmenu: ProjektiZaIzmenu) { 
        var sqlQuery =
            "UPDATE projekat  SET projekatzaizmenu.podprogram = ?  WHERE projekatzaizmenu.idProjekta = ?";
        var queryVar = [projekatzaizmenu.podprogram, projekatzaizmenu.idProjekta];
        dbConnection.query(sqlQuery, queryVar, function (err, rows) {});
    }

}

export const projektiZaizmenuDAO = new ProjektiZaizmenuDAO() 