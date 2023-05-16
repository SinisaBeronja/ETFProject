import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css']
})
export class UploadsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nazivProjekta: string = "";
  akronim: string = "";
  apstraktSrp: string = "";
  apstraktEng: string = "";
  potprogram: string = "";
  imeRukovodioca: string = "";
  prezimeRukovodioca: string = "";
  datumRodjenja: string = "";
  emailRukovodioca: string = "";
  telefon: string = "";
  nazivInstSrp: string = "";
  nazivInstEng: string = "";
  nazivSkrInst: string = "";
  adresaInst: string = "";
  gradInst: string = "";
  ovlascenoLiceInst: string = "";
  telefonInst: string = "";
  saglasnost: boolean = false;

  nextPage(){
     // obavezno popunjavanje svih polja
    if (this.nazivProjekta=="" || this.akronim=="" || this.apstraktSrp=="" || this.apstraktEng=="" 
    || this.potprogram=="" || this.imeRukovodioca==""
    || this.telefon=="" || this.nazivInstSrp=="" || this.nazivInstEng=="" || this.nazivSkrInst=="" || this.adresaInst=="" || this.gradInst=="" || this.ovlascenoLiceInst=="" || this.telefonInst=="" || this.saglasnost ==false)  {
            alert("Niste popunili sva polja")
        }      
        else  

    this.router.navigate(["upload-files"])  
  }

}

