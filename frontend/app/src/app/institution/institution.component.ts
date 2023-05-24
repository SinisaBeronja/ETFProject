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

    // obavezno popunjavanje svih polja
    if (this.nazivInstSrp=="" || this.nazivInstEng=="" || this.nazivSkrInst=="" || this.gradInst=="" || this.adresaInst=="" || this.sifraInstitucije=="" || this.ovlascenoLiceInst=="" || this.telefonInst=="")  {
      alert("Niste popunili sva polja")
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
