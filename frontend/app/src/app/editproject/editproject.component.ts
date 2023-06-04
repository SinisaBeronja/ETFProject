import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institution } from '../models/Institution';
import { Oblast } from '../models/Oblast';
import { Project } from '../models/Project';
import { User } from '../models/User';
import { InstitutionService } from '../services/institution.service';
import { OblastService } from '../services/oblast.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router, private oblastService: OblastService, private institutionService: InstitutionService) { }

  ngOnInit(): void {
    this.project = JSON.parse("" + localStorage.getItem("project"))
    this.user = JSON.parse("" + localStorage.getItem("logged"))
    this.oblastService.getAllOblast().then((resp)=>{
      this.oblasti = JSON.parse(JSON.stringify(resp))
    })
    this.institutionService.getAllInstitution().then((resp)=>{
      this.institution = JSON.parse(JSON.stringify(resp))
    })
    // Ova funkcionalnost daje sve vrednosti za select listu oblasti i institucija
  }

  project: Project = new Project()
  user: User = new User()
  oblasti: Oblast[] = []
  institution: Institution[] = []

  editOneProject(){
    console.log(this.project)
    this.projectService.editOneProject(this.project). then((resp) =>{
      alert("uspešna izmena")
    })
  }

  goBack(){
    this.router.navigate(["/search"])
  }

}

