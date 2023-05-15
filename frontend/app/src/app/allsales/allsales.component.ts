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
          //this.users.sort((a, b)=>{
          //return a.prezime - b.prezime
          //})
    })
  }
   //  dohvata sve projekte i prikazuje na admin stranici

  goBack(){
		this.router.navigate(["/admin"])
	  }

  ViewProject(project: Project){

  }                       


}
