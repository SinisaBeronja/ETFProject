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

  ngOnInit(): void {
    this.institutionService.getAllInstitution().then((resp)=>{
      this.institucije = JSON.parse(JSON.stringify(resp))
          //this.institucije.sort((a, b)=>{
          //return a.nazivInstSrp - b.nazivInstSrp
          //})
          this.user = JSON.parse("" + localStorage.getItem("logged",)) 
    })
  }

  regexnazivInstSrp = new RegExp("^([A-Za-z]{2,}\s[A-Za-z]{1,}\s?([A-Za-z]{1,})?)");
  regexsifraInstitucije = new RegExp(/^([0-9]*)([A-Z]*)([0-9]*)$/);
  regexgradInst = new RegExp("^([A-Za-z]{2,}\s[A-Za-z]{1,}\s?([A-Za-z]{1,})?)");
  regexadresaInst = new RegExp("^[a-z A-Z _ . 0-9]+$");
  regexnazivInstEng = new RegExp("^([A-Za-z]{2,}\s[A-Za-z]{1,}\s?([A-Za-z]{1,})?)");
  regexnazivSkrInst = new RegExp("^[A-Z]+$");
  regexovlascenoLiceInst = new RegExp("^([A-Za-z]{2,}\s[A-Za-z]{1,}\s?([A-Za-z]{1,})?)");
  regextelefon: RegExp = /^((060|061|062|063|064|065|066|067)\/\d{4}-\d{3})$/;
  
 

  editInstitution(institution:Institution){
    localStorage.setItem("institution", JSON.stringify(institution))
    this.router.navigate(["editinstitution"])
  }


  deleteInstitution(institution:Institution){
    this.institutionService.deleteInstitution(institution).then((resp) =>{
      alert("Izbrisano")
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
      alert("Niste uneli naziv institucije")
    }      
    else if (!this. nazivInstSrp.match(this.regexnazivInstSrp))
    {
      alert("Unesite početno veliko slovo za naziv institucije")
    }  
    else if (this.sifraInstitucije =="") {
      alert("Niste uneli šifru institucije")
      }      
    else if (!this.sifraInstitucije.match(this.regexsifraInstitucije))
      {
        alert("Šifra instutucije sastoji se od brojeva i velikih slova")   
      }      
    else if (this.gradInst =="") {
    alert("Niste uneli grad")
    }      
    else if (!this.gradInst.match(this.regexgradInst))
    {
      alert("Unesite veliko početno slovo za grad")   
    }  
    else if (this.adresaInst =="") {
      alert("Niste uneli adresu")
    }      
    else if (!this.adresaInst.match(this.regexadresaInst))
    {
      alert("Unesite veliko početno slovo za adresu i broj objekta")   
    }  
    else if (this.nazivInstEng =="") {
      alert("Niste uneli naziv institucije na engleskom")
    }      
    else if (!this.nazivInstEng.match(this.regexnazivInstEng))
    {
      alert("Unesite veliko početno slovo za naziv institucije na engleskom")   
    }  
    else if (this.nazivSkrInst =="") {
      alert("Niste uneli skraćeni naziv institucije")
    }      
    else if (!this.nazivSkrInst.match(this.regexnazivSkrInst))
    {
      alert("Skraćeni naziv institucije upišite velikim slovima")   
    }  
    else if (this.ovlascenoLiceInst =="") {
      alert("Niste uneli ovlašćeno lice")
    }      
    else if (!this.ovlascenoLiceInst.match(this.regexovlascenoLiceInst))
    {
      alert("Unesite velika početna slovo za ovlašćeno lice")   
    }    
    else if (!this.telefonInst.match(this.regextelefon))
		{
		  alert("Unesite telefon u sledećem formatu: 06x/xxxx-xxx")	
    }  
    else 

    this.institutionService.insertInstitution(institution).then((resp) =>{
      alert("Dodata institucija")
      this.ngOnInit()
    })
    .catch(()=>{
      alert("Greska - institucija nije dodata")
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
