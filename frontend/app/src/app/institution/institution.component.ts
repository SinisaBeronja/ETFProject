import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institution } from '../models/Institution';
import { User } from '../models/User';
import { InstitutionService } from '../services/institution.service';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {

  constructor(private institutionService: InstitutionService, private router: Router) { }

  institucije: Institution[] = []
  nazivInstSrp: string = ""
  sifraInstitucije: string = ""
  gradInst: string = ""
  adresaInst: string = ""
  nazivInstEng: string = ""
  nazivSkrInst: string = ""
  ovlascenoLiceInst: string = ""
  telefonInst: string = ""

  user: User = new User()

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
  showbtnizmena: boolean = true


  ngOnInit(): void {
    this.institutionService.getAllInstitution().then((resp)=>{
      this.institucije = JSON.parse(JSON.stringify(resp))
          //this.institucije.sort((a, b)=>{
          //return a.nazivInstSrp - b.nazivInstSrp
          //})
          this.user = JSON.parse("" + localStorage.getItem("logged",)) 
    })
  }

  regexnazivInstSrp = new RegExp("[A-ZÖ][a-zö]+");
  regexsifraInstitucije = new RegExp(/^([0-9]*)([A-Z]*)([0-9]*)$/);
  regexgradInst = new RegExp("[A-ZÖ][a-zö]+");
  regexadresaInst = new RegExp("^[a-z A-Z _ . 0-9]+$");
  regexnazivInstEng = new RegExp("[A-ZÖ][a-zö]+");
  regexnazivSkrInst = new RegExp("^[A-Z]+$");
  regexovlascenoLiceInst = new RegExp("[A-ZÖ][a-zö]+");
  regextelefon: RegExp = /^((060|061|062|063|064|065|066|067)\/\d{3}-\d{3,4})$/;
  
 

  editInstitution(institution:Institution){
    localStorage.setItem("institution", JSON.stringify(institution))
    this.router.navigate(["editinstitution"])
  }


  deleteInstitution(institution:Institution){
    this.institutionService.deleteInstitution(institution).then((resp) =>{
      //alert("Izbrisano")
      this.ngOnInit()   // ponovo prikazuje sve institucije iz ngOnInit
    })
  }


  insertInstitution(){
    let institution = new Institution();
    institution.nazivInstSrp = this.nazivInstSrp
    institution.nazivInstEng = this.nazivInstEng
    institution.nazivSkrInst = this.nazivSkrInst
    institution.gradInst = this.gradInst
    institution.adresaInst = this.adresaInst
    institution.sifraInstitucije = this.sifraInstitucije
    institution.ovlascenoLiceInst = this.ovlascenoLiceInst
    institution.telefonInst = this.telefonInst

    // obavezno popunjavanje svih polja i regex
    if (this.nazivInstSrp=="") {
      //alert("Niste uneli naziv institucije")
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
      this.showbtnizmena = true
    }      
    else if (!this. nazivInstSrp.match(this.regexnazivInstSrp))
    {
      //alert("Unesite početno veliko slovo za naziv institucije")
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
      this.showbtnizmena = true
    }  
    else if (this.sifraInstitucije =="") {
      //alert("Niste uneli šifru institucije")
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
      this.showbtnizmena = true
      }      
    else if (!this.sifraInstitucije.match(this.regexsifraInstitucije))
      {
        //alert("Šifra instutucije sastoji se od brojeva i velikih slova") 
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
        this.showbtnizmena = true  
      }      
    else if (this.gradInst =="") {
    //alert("Niste uneli grad")
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
    this.showbtnizmena = true  
    }      
    else if (!this.gradInst.match(this.regexgradInst))
    {
      //alert("Unesite veliko početno slovo za grad")
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
      this.showbtnizmena = true     
    }  
    else if (this.adresaInst =="") {
      //alert("Niste uneli adresu")
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
      this.showbtnizmena = true  
    }      
    else if (!this.adresaInst.match(this.regexadresaInst))
    {
      //alert("Unesite veliko početno slovo za adresu i broj objekta")
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
      this.showbtnizmena = true     
    }  
    else if (this.nazivInstEng =="") {
      //alert("Niste uneli naziv institucije na engleskom")
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
      this.showbtnizmena = true  
    }      
    else if (!this.nazivInstEng.match(this.regexnazivInstEng))
    {
      //alert("Unesite veliko početno slovo za naziv institucije na engleskom")   
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
      this.showbtnizmena = true  
    }  
    else if (this.nazivSkrInst =="") {
      //alert("Niste uneli skraćeni naziv institucije")
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
      this.showbtnizmena = true  
    }      
    else if (!this.nazivSkrInst.match(this.regexnazivSkrInst))
    {
      //alert("Skraćeni naziv institucije upišite velikim slovima")  
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
      this.showbtnizmena = true   
    }  
    else if (this.ovlascenoLiceInst =="") {
      //alert("Niste uneli ovlašćeno lice")
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
      this.showbtnizmena = true  
    }      
    else if (!this.ovlascenoLiceInst.match(this.regexovlascenoLiceInst))
    {
      //alert("Unesite velika početna slovo za ovlašćeno lice")  
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
      this.showbtnizmena = true   
    }    
    else if (!this.telefonInst.match(this.regextelefon))
		{
		  //alert("Unesite telefon u sledećem formatu: 06x/xxxx-xxx")	
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
      this.showbtnizmena = true  
    }  
    else 

    this.institutionService.insertInstitution(institution).then((resp) =>{
      //alert("Dodata institucija")
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
      this.showbtnizmena = false
      this.ngOnInit()
    })
    .catch(()=>{
      //alert("Greska - institucija nije dodata")
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
      this.showbtnizmena = true
    })
  }

  goBack(){
    if(this.user.lozinka == "admin246"){
      this.router.navigate(["admin"])
    }
    else {
      this.router.navigate(["project"])
    }
  }

}
