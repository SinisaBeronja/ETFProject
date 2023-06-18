import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/Project';
import { User } from '../models/User';
import { Institution } from '../models/Institution';
import { InstitutionService } from '../services/institution.service';
import { OblastService } from '../services/oblast.service';
import { Oblast } from '../models/Oblast';
import { UserService } from '../services/user.service';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  newProject: any;

  constructor(private projectService: ProjectService, private institutionService: InstitutionService, private oblastService: OblastService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.user = JSON.parse("" + localStorage.getItem("logged",)) 
    this.institutionService.getAllInstitution().then((resp)=>{
      this.institution = JSON.parse(JSON.stringify(resp))
      console.log(this.institution)
    })
    // Ova funkcionalnost daje sve vrednosti za select listu institucija

    this.oblastService.getAllOblast().then((resp)=>{
      this.oblasti = JSON.parse(JSON.stringify(resp))
     // this.oblast.sort((a, b)=>{
       // return a.nazivOblasti - b.nazivOblasti
      //})
    })
    // Ova funkcionalnost daje sve vrednosti za select listu oblasti

    this.idInst = this.user.idInstitucije
    this.institutionService.searchInstitution(this.idInst).then((res) => {
      this.institucija = JSON.parse(JSON.stringify(res));
      
      console.log(this.institucija)
      console.log(this.institucija.nazivInstSrp)
      })
        .catch(()=>{
          alert("error")
      })
       // Ova funkcionalnost nam vraca instituciju kada joj prosledimo id, treba nam za project stranu da dovuce podatke za instituciju Usera, a zove se idInst zbog jedinstvenosti  

       this.userService.getAllUsers().then((resp)=>{
        this.users = JSON.parse(JSON.stringify(resp))
        console.log(this.users)
            //this.users.sort((a, b)=>{
            //return a.prezime - b.prezime
            //})
      })

  }

  user: User = new User()
  users: User[] = []

  idInst: number = 0
  institucija: Institution = new Institution()

    project: Project[] = []
    institution: Institution[] = []
    oblasti: Oblast[] = []

    nazivProjekta: string = "";
    datumProjekta: string = "" ;
    akronim: string = "";
    apstraktSrp: string = "";
    apstraktEng: string = "";
    ukupanBudzet: number = 0;
    snimanjeProjekta: string = "";
    podprogram: string = "";
    ime: string = "";
    prezime: string = "";
    idRukovodica: number = 0
    projekatInst1: number = 1
    projekatInst2: number = 1
    projekatInst3: number = 1
    projekatInst4: number = 1
    projekatInst5: number = 1
    projekatOblast1: number = 1
    projekatOblast2: number = 1
    projekatOblast3: number = 1
    projekatOblast4: number = 1
    projekatOblast5: number = 1
    idInstitucije !: number
    status: string = ""

    showGoBack: boolean = false
  
    regexNazivProjekta = new RegExp("^[A-Z]");
    regexDatumProjekta = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2}\.)$/gm;
    regexAkronim = new RegExp("^[A-Z][^a-z]");
    regexApstraktSrp = new RegExp("^[A-Z]");
    regexApstraktEng = new RegExp("^[A-Z]");
    regexPodprogram = new RegExp("^[A-Z]");
    regexUkupanBudzet = new RegExp("^\d+");

    msgblank: boolean = true
    msg1: boolean = false
    msg2: boolean = false
    msg3: boolean = false
    msg4: boolean = false
    msg5: boolean = false
    msg6: boolean = false
    msg7: boolean = false
    msg8: boolean = false
    msg9: boolean = false
    msg10: boolean = false
    msg11: boolean = false
    msg12: boolean = false
    msg13: boolean = false
    msg14: boolean = false
    msg15: boolean = false
    msg16: boolean = false
    msg17: boolean = false
    msg18: boolean = false
    msg19: boolean = false
    msg20: boolean = false
    showbtnizmena: boolean = true


    //  funkcija insertProject prvo snima postojecu stranu u tabeli pa 
    //  prelazi na sledecu stranu za upload fajlova
    insertProject(){
        let project = new Project();
        project.nazivProjekta = this.nazivProjekta
        project.datumProjekta = this.datumProjekta
        project.akronim = this.akronim
        project.apstraktSrp = this.apstraktSrp
        project.apstraktEng = this.apstraktEng
        project.ukupanBudzet = this.ukupanBudzet
        project.snimanjeProjekta = "Predat"             // Rad je Predat
        project.podprogram = this.podprogram
        project.idRukovodioca = this.user.idRukovodioca
        project.projekatInst1 = this.projekatInst1 
        project.projekatInst2 = this.projekatInst2 
        project.projekatInst3 = this.projekatInst3 
        project.projekatInst4 = this.projekatInst4 
        project.projekatInst5 = this.projekatInst5 
        project.projekatOblast1 = this.projekatOblast1
        project.projekatOblast2 = this.projekatOblast2
        project.projekatOblast3 = this.projekatOblast3
        project.projekatOblast4 = this.projekatOblast4
        project.projekatOblast5 = this.projekatOblast5
        project.status = "Podnet"                        // Default za evaluaciju je Podnet

          // obavezno popunjavanje svih polja i regex
  if(this.nazivProjekta==""){
    //alert("Niste popunili naziv projekta")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = true
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true
    }
  else if (!this.nazivProjekta.match(this.regexNazivProjekta))
    {
    //alert("Potrebno je da naziv projekta počinje velikim slovom")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = true
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true   
    }  
  else if(this.datumProjekta==""){
    //alert("Niste popunili datum projekta")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = true
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true
    }
  else if (!this.datumProjekta.match(this.regexDatumProjekta))
    {
    //alert("Potrebno je da datum projekta bude u formatu: dd.mm.yyyy.") 
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = true
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true  
    }  
  else if(this.akronim==""){
    //alert("Niste popunili akronim")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = true
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true
    }
  else if (!this.akronim.match(this.regexAkronim))
    {
    //alert("Napišite akronim velikim slovima")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = true
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true   
    }  
  else if(this.apstraktSrp==""){
    //alert("Niste popunili apstrakt projekta na srpskom jeziku")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = true
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true
    }
  else if (!this.apstraktSrp.match(this.regexApstraktSrp))
    {
    //alert("Potrebno je da apstrakt projekta počinje velikim slovom")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = true
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true   
    }  
  else if(this.apstraktEng==""){
    //alert("Niste popunili apstrakt projekta na engleskom jeziku")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = true
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true
    }
   else if (!this.apstraktEng.match(this.regexApstraktEng)){
    //alert("Potrebno je da apstrakt projekta na engleskom počinje velikim slovom")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = true
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true   
    }  
  else if(this.podprogram==""){
    //alert("Niste uneli podprogram")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = true
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true
    }
  else if (!this.podprogram.match(this.regexPodprogram))
    {
    //alert("Potrebno je da podprogram počinje velikim slovom")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = true
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true   
    }  
  else if(this.projekatOblast1<2){
    //alert("Izbaretite oblast iz padajuće liste ili dodajte novu oblast/oblasti i zatim izaberite na listi")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = true
    this.msg16 = false
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true  
    }
  else if(this.ukupanBudzet==0){
    //alert("Niste uneli ukupan budzet")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = true
    this.msg17 = false
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true
    }
  else if(this.projekatInst1<2){
    //alert("Izbaretite partnersku instituciju iz padajuće liste ili dodajte novu instituciju/institucije i zatim izaberite na listi")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = true
    this.msg18 = false
    this.msg19 = false
    this.showbtnizmena = true  
    }    
    
  else    
        
        this.projectService.insertProject(project).then((resp) =>{
            //alert("Uspesno dodata prva strana projekta")
            this.msgblank = true
            this.msg1 = true
            this.msg2 = false
            this.msg3 = false
            this.msg4 = false
            this.msg5 = false
            this.msg6 = false
            this.msg7 = false
            this.msg8 = false
            this.msg9 = false
            this.msg10 = false
            this.msg11 = false
            this.msg12 = false
            this.msg13 = false
            this.msg14 = false
            this.msg15 = false
            this.msg16 = false
            this.msg17 = false
            this.msg18 = false
            this.msg19 = false      
            this.showbtnizmena = false
            localStorage.setItem("projekat_za_unos", JSON.stringify(project))

            
            console.log(project)


            this.router.navigate(["upload-files"])
        })
        .catch(()=>{
            //alert("Greška")
            this.msgblank = false
            this.msg1 = false
            this.msg2 = true
            this.msg3 = false
            this.msg4 = false
            this.msg5 = false
            this.msg6 = false
            this.msg7 = false
            this.msg8 = false
            this.msg9 = false
            this.msg10 = false
            this.msg11 = false
            this.msg12 = false
            this.msg13 = false
            this.msg14 = false
            this.msg15 = false
            this.msg16 = false
            this.msg17 = false
            this.msg18 = false
            this.msg19 = false      
            this.showbtnizmena = true
        })
        
    }


    saveProject(){
      let project = new Project();
      project.nazivProjekta = this.nazivProjekta
      project.datumProjekta = this.datumProjekta
      project.akronim = this.akronim
      project.apstraktSrp = this.apstraktSrp
      project.apstraktEng = this.apstraktEng
      project.ukupanBudzet = this.ukupanBudzet
      project.snimanjeProjekta = "Snimljen"
      project.podprogram = this.podprogram
      project.idRukovodioca = this.user.idRukovodioca
      project.projekatInst1 = this.projekatInst1 
      project.projekatInst2 = this.projekatInst2 
      project.projekatInst3 = this.projekatInst3 
      project.projekatInst4 = this.projekatInst4 
      project.projekatInst5 = this.projekatInst5 
      project.projekatOblast1 = this.projekatOblast1
      project.projekatOblast2 = this.projekatOblast2
      project.projekatOblast3 = this.projekatOblast3
      project.projekatOblast4 = this.projekatOblast4
      project.projekatOblast5 = this.projekatOblast5
      project.status = "Podnet"

        // nije obavezno popunjavanje svih polja
        
          // onemogućiti snimanje ukoliko nijedno polje nije popunjeno - uradjen naknadno regex
          if (this. nazivProjekta =="" && this. datumProjekta =="" && this. akronim =="" && this. apstraktSrp =="" 
          && this. apstraktEng =="" && this. podprogram ==""
          && this. projekatOblast1<2  && this. ukupanBudzet ==0 && this. projekatInst1<2)  {
            //alert("Niste popunili nijedno polje")
            this.msgblank = false         
            this.msg20 = true      
            this.showbtnizmena = true    
          }
          else
   
      this.projectService.insertProject(project).then((resp) =>{
          //alert("Uspesno snimljena polja koja ste uneli")
          this.msgblank = false
          this.msg1 = false
          this.msg2 = false
          this.msg3 = false
          this.msg4 = false
          this.msg5 = false
          this.msg6 = false
          this.msg7 = false
          this.msg8 = false
          this.msg9 = false
          this.msg10 = false
          this.msg11 = false
          this.msg12 = false
          this.msg13 = false
          this.msg14 = false
          this.msg15 = false
          this.msg16 = false
          this.msg17 = false      
          this.msg18 = true      
          this.msg19 = false      
          this.showbtnizmena = true
          
          this.showGoBack = true
          
      })
      .catch(()=>{
          alert("Greska")
      })
    }
 
    resetProject(){
      this.ngOnInit
      this.nazivProjekta = ""
      this.datumProjekta = ""
      this.akronim = ""
      this.apstraktSrp = ""
      this.apstraktEng = ""
      this.ukupanBudzet = 0
      this.podprogram = ""
      this.projekatInst1 = 1
      this.projekatInst2 = 0
      this.projekatInst3 = 0
      this.projekatInst4 = 0
      this.projekatInst5 = 0
      this.projekatOblast1 = 1
      this.projekatOblast2 = 0
      this.projekatOblast3 = 0
      this.projekatOblast4 = 0
      this.projekatOblast5 = 0

      //alert("Obrisana sva polja koja ste uneli")
      this.msgblank = false
      this.msg1 = false
      this.msg2 = false
      this.msg3 = false
      this.msg4 = false
      this.msg5 = false
      this.msg6 = false
      this.msg7 = false
      this.msg8 = false
      this.msg9 = false
      this.msg10 = false
      this.msg11 = false
      this.msg12 = false
      this.msg13 = false
      this.msg14 = false
      this.msg15 = false
      this.msg16 = false
      this.msg17 = false
      this.msg18 = false
      this.msg19 = true      
      this.msg19 = true      
      this.showbtnizmena = true
      this.showGoBack = true
      

      //this.router.navigate(["/user"])
    }


    allInstitution(){
      this.router.navigate(["/institution"])
    }

    allOblast(){
      this.router.navigate(["/oblast"])
    }
        
   
    searchInstitution(idInst: number){
      this.institutionService.searchInstitution(this.idInst).then((res) => {
      this.institucija = JSON.parse(JSON.stringify(res));
      })
        .catch(()=>{
          alert("error")
      })
    }
        // Ova funkcionalnost nam vraca instituciju kada joj prosledimo id, treba nam za project stranu da dovuce podatke za instituciju Usera, a zove se idInst zbog jedinstvenosti. Prebačena je u ng oninit jer nam pri otvaranju strane treba.

    goBack(){
      this.router.navigate(["/user"])
    }

}
