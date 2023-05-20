import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/Project';
import { User } from '../models/User';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-allsales',
  templateUrl: './allsales.component.html',
  styleUrls: ['./allsales.component.css']
})
export class AllsalesComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router) { }

  projects: Project[] = []
  user: User = new User()
 

  ngOnInit(): void {
    // this.user = JSON.parse("" + localStorage.getItem("logged",)) ne treba - sirurno je admin
    this.projectService.getAllProjects().then((resp)=>{
      this.projects = JSON.parse(JSON.stringify(resp))
        this.sortByUser()
    })
  }
   //  dohvata sve projekte i prikazuje na admin stranici

  goBack(){
		this.router.navigate(["/admin"])
	  }

  sortByUser(){
    this.projects.sort((a, b)=>{
      return a.idRukovodioca - b.idRukovodioca
      })
    }

    sortByDate(){
      this.projects.sort((a, b)=>{
        const nameA = a.datumProjekta.toUpperCase()
        const nameB = b.datumProjekta.toUpperCase()
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }

    sortByInstitution(){
      this.projects.sort((a, b)=>{
        const nameA = a.nazivInstSrp.toUpperCase()
        const nameB = b.nazivInstSrp.toUpperCase()
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }

    sortBySubprogram(){
      this.projects.sort((a, b)=>{
        const nameA = a.podprogram.toUpperCase()
        const nameB = b.podprogram.toUpperCase()
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }
    
    GetOneProject(project: Project){
    //localStorage.removeItem("project")         
    localStorage.setItem("project", JSON.stringify(project))
    this.router.navigate(["projectstatus"])
  }                       
  // praznimo project iz localstorage,pa onda stavljamo nov

}
