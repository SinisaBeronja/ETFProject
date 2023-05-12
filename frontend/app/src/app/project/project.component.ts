import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/Project';
import { User } from '../models/User';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse("" + localStorage.getItem("logged",)) 
  }

  user: User = new User()

    project: Project[] = []

    nazivProjekta: string = "";
    datumProjekta: Date = new Date(8.64e15);
    akronim: string = "";
    apstraktSrp: string = "";
    apstraktEng: string = "";
    ukupanBudzet: number = 0;
    snimanjeProjekta: string = "";
    podprogram: string = "";
    ime: string = "";
    prezime: string = "";
    

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
        this.projectService.insertProject(project).then((resp) =>{
            alert("Uspesno dodata prva strana projekta")
            this.router.navigate(["upload-files"])
        })
        .catch(()=>{
            alert("Greska")
        })
    }

}
