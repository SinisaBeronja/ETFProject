import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '../models/Project';
import { User } from '../models/User';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router) { }

  projects: Project[] = []
  user: User = new User()
 
  search_form = new FormGroup({ 
    nazivProjekta: new FormControl(""), 
    akronim: new FormControl("") 
  });


  p: number = 1
  
  ngOnInit(): void {
    this.user = JSON.parse("" + localStorage.getItem("logged",))

    if(this.user.lozinka=="admin246"){
      this.projectService.getAllProjects().then((resp)=>{
        this.projects = JSON.parse(JSON.stringify(resp))
      })
    } 

    if(this.user.lozinka !="admin246"){
      this.projectService.getAllProjectsUser(this.user.idRukovodioca).then((resp)=>{
        this.projects = JSON.parse(JSON.stringify(resp))
      })
    }

   
    
    this.search_form.valueChanges.subscribe(value => {
      let val = value as {nazivProjekta: string, akronim: string}
      this.projects = this.getProjectsByNameAndAkronim(val)
    })
  }

  
  getProjectsByNameAndAkronim(obj: {nazivProjekta: string, akronim: string}) {
    let result: Project[] = [];
    for(let i = 0; i < this.projects.length; i++) {
      if(this.projects[i].nazivProjekta.includes(obj.nazivProjekta) && this.projects[i].akronim.includes(obj.akronim)){ 
      result.push(this.projects[i]);
      }
    }
    return result;
  }
    
  
    
  GetOneProject(project: Project){
    //localStorage.removeItem("project")         
    localStorage.setItem("project", JSON.stringify(project))
    this.router.navigate(["projectstatus"])
  }                       
  // praznimo project iz localstorage,pa onda stavljamo nov


  editOneProject(project: Project){
    localStorage.setItem("project", JSON.stringify(project))
    this.router.navigate(["editproject"])
  }


  goBack(){
		if(this.user.lozinka == "admin246"){
      this.router.navigate(["admin"])
    }
    else {
      this.router.navigate(["user"])
    }
	}
  
}
