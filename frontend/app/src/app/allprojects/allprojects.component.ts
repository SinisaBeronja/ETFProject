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
    this.projectService.getAllProjects().then((resp)=>{
      this.projects = JSON.parse(JSON.stringify(resp))
          //this.users.sort((a, b)=>{
          //return a.prezime - b.prezime
          //})
    })
  }

  goBack(){
		this.router.navigate(["/user"])
	  }

}
