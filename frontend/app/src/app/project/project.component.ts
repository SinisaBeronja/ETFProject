import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/Project';
import { User } from '../models/User';
import { Institution } from '../models/Institution';
import { InstitutionService } from '../services/institution.service';
import { OblastService } from '../services/oblast.service';
import { Oblast } from '../models/Oblast';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, private institutionService: InstitutionService, private oblastService: OblastService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse("" + localStorage.getItem("logged",)) 
    this.institutionService.getAllInstitution().then((resp)=>{
      this.institution = JSON.parse(JSON.stringify(resp))
    })
    this.oblastService.getAllOblast().then((resp)=>{
      this.oblasti = JSON.parse(JSON.stringify(resp))
     // this.oblast.sort((a, b)=>{
       // return a.nazivOblasti - b.nazivOblasti
      //})
    })

  }

  user: User = new User()

    project: Project[] = []
    institution: Institution[] = []
    oblasti: Oblast[] = []

    nazivProjekta: string = "";
    datumProjekta: string = "";
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
    

    //  funkcija insertProject prvo snima postojecu stranu u tabeli, sa default vrednostima pa 
    //  prelazi na sledecu stranu za upload fajlova
    insertProject(){
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
        project.projekatOblast1 = 2
        project.projekatOblast2 = 3
        project.projekatOblast3 = 1
        project.projekatOblast4 = 6
        project.projekatOblast5 = 5
        this.projectService.insertProject(project).then((resp) =>{
            alert("Uspesno dodata prva strana projekta")
            this.router.navigate(["upload-files"])
        })
        .catch(()=>{
            alert("Greska")
        })
    }

    allInstitution(){
      this.router.navigate(["/institution"])
      }

      allOblast(){
        this.router.navigate(["/oblast"])
        }
    
}
