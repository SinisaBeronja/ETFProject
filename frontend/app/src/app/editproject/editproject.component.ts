import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institution } from '../models/Institution';
import { Oblast } from '../models/Oblast';
import { Project } from '../models/Project';
import { User } from '../models/User';
import { EditprojectService } from '../services/editproject.service';

import { InstitutionService } from '../services/institution.service';
import { OblastService } from '../services/oblast.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router, private oblastService: OblastService, private institutionService: InstitutionService, private editprojecService: EditprojectService) { }

  ngOnInit(): void {
    this.projekat = JSON.parse("" + localStorage.getItem("project"))
    this.user = JSON.parse("" + localStorage.getItem("logged"))
    console.log(this.projekat)
    console.log(this.user)
    this.oblastService.getAllOblast().then((resp)=>{
      this.oblasti = JSON.parse(JSON.stringify(resp))
    })
    this.institutionService.getAllInstitution().then((resp)=>{
      this.institution = JSON.parse(JSON.stringify(resp))
    })
    // Ova funkcionalnost daje sve vrednosti za select listu oblasti i institucija
  }

  projekat: Project = new Project()
  user: User = new User()
  oblasti: Oblast[] = []
  institution: Institution[] = []

  msgblank: boolean = true
  msg1: boolean = false
  msg2: boolean = false
  showbtnizmena: boolean = true

  projectUpdate(){
    console.log(this.projekat)
    this.projectService.projectUpdate(this.projekat). then((resp) =>{
      //alert("uspešna izmena")
      this.msgblank = true
      this.msg1 = true
      this.msg2 = false
      this.showbtnizmena = false
    })
    .catch(()=>{
      //alert("Greška")
      this.msgblank = false
      this.msg1 = false
      this.msg2 = true
      this.showbtnizmena = true
    })
  }

  goBack(){
    this.router.navigate(["/search"])
  }

}

