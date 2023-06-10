import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/Project';
import { ProjektiZaIzmenu } from '../models/ProjekatZaIzmenu';
import { ProjectService } from '../services/project.service';
import { ProjekatzaizmenuService } from '../services/projekatzaizmenu.service';

@Component({
  selector: 'app-projekti',
  templateUrl: './projekti.component.html',
  styleUrls: ['./projekti.component.css']
})
export class ProjektiComponent implements OnInit {

  constructor(private router: Router, private projectService: ProjectService, private projekatzaizmenuService: ProjekatzaizmenuService) { }

  projekti: ProjektiZaIzmenu[] = []
 
  nazivProjekta: string = "";
  datumProjekta: string = "" ;
  akronim: string = "";
  apstraktSrp: string = "";
  apstraktEng: string = "";
  ukupanBudzet: number = 0;
  snimanjeProjekta: string = "";
  podprogram: string = "";
  idRukovodioca: number = 0;
  nazivInstSrp: string = "";
  projekatInst1: number = 0;
  projekatInst2: number = 0;
  projekatInst3: number = 0;
  projekatInst4: number = 0;
  projekatInst5: number = 0;
  projekatOblast1: number = 0;
  projekatOblast2: number = 0;
  projekatOblast3: number = 0;
  projekatOblast4: number = 0;
  projekatOblast5: number = 0;
  status: string = "";
  
  

  ngOnInit(): void {
    this.projekatzaizmenuService.getAllProjektiZaIzmenu().then((resp)=>{
      this.projekti = JSON.parse(JSON.stringify(resp))
    })
  }

  editProjekat(projekat:ProjektiZaIzmenu){
    localStorage.setItem("projekat", JSON.stringify(this.projekti))
    this.router.navigate(["projekatupdate"])
  }







  goBack(){
    this.router.navigate(["user"])
  }

}
