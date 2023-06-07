import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/Project';
import { User } from '../models/User';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-allprojects',
  templateUrl: './allprojects.component.html',
  styleUrls: ['./allprojects.component.css']
})
export class AllprojectsComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router) { }

  projects: Project[] = []
  user: User = new User()
 

  ngOnInit(): void {
    this.user = JSON.parse("" + localStorage.getItem("logged",)) 
    this.projectService.getAllProjectsUser(this.user.idRukovodioca).then((resp)=>{
      this.projects = JSON.parse(JSON.stringify(resp))
          //this.users.sort((a, b)=>{
          //return a.prezime - b.prezime
          //})
    })
  }
  //  dohvata sve projekte i prikazuje na user stranici, user.ime i user.prezime dohvata preko instance user iz local storage-a

  GetOneProject(project:Project){
    localStorage.setItem("project", JSON.stringify(project))
    this.router.navigate(["projectstatus"])
  }
     
  updateProject(){
    this.router.navigate(["projectstatus"])
  }


  goBack(){
		this.router.navigate(["/user"])
	  }

}
