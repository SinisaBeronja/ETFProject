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
  selector: 'app-projectstatus',
  templateUrl: './projectstatus.component.html',
  styleUrls: ['./projectstatus.component.css']
})
export class ProjectstatusComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router, private institutionService: InstitutionService, private oblastService: OblastService) { }

    
    project: Project = new Project()

    inst1: Institution = new Institution()
    inst2: Institution = new Institution()
    inst3: Institution = new Institution()
    inst4: Institution = new Institution()
    inst5: Institution = new Institution()

    oblast1: Oblast = new Oblast()
    oblast2: Oblast = new Oblast()
    oblast3: Oblast = new Oblast()
    oblast4: Oblast = new Oblast()
    oblast5: Oblast = new Oblast()
   
    user: User = new User()
  
  ngOnInit(): void {
    this.user = JSON.parse("" + localStorage.getItem("logged",))
    this.project = JSON.parse("" + localStorage.getItem("project")) 
    console.log(this.project)

    this.institutionService.searchInstitution(this.project.projekatInst1).then((res) => {
       this.inst1 = JSON.parse(JSON.stringify(res));
       })
       .catch(()=>{
        alert("greška")
    })
    this.institutionService.searchInstitution(this.project.projekatInst2).then((res) => {
       this.inst2 = JSON.parse(JSON.stringify(res));
       })
       .catch(()=>{
        alert("greška")
    })
    this.institutionService.searchInstitution(this.project.projekatInst3).then((res) => {
       this.inst3 = JSON.parse(JSON.stringify(res));      
       })
       .catch(()=>{
        alert("greška")
    })
    this.institutionService.searchInstitution(this.project.projekatInst4).then((res) => {
       this.inst4 = JSON.parse(JSON.stringify(res));
       })
       .catch(()=>{
        alert("greška")
    })
    this.institutionService.searchInstitution(this.project.projekatInst5).then((res) => {
       this.inst5 = JSON.parse(JSON.stringify(res));      
       })
       .catch(()=>{
        alert("greška")
    })
    this.oblastService.searchOblast(this.project.projekatOblast1).then((res) => {
       this.oblast1 = JSON.parse(JSON.stringify(res));
       })
       .catch(()=>{
        alert("greška")
    })
    this.oblastService.searchOblast(this.project.projekatOblast2).then((res) => {
       this.oblast2 = JSON.parse(JSON.stringify(res));
       })
       .catch(()=>{
        alert("greška")
    })
    this.oblastService.searchOblast(this.project.projekatOblast3).then((res) => {
       this.oblast3 = JSON.parse(JSON.stringify(res));
       })
       .catch(()=>{
        alert("greška")
    })
    this.oblastService.searchOblast(this.project.projekatOblast4).then((res) => {
       this.oblast4 = JSON.parse(JSON.stringify(res));
       })
       .catch(()=>{
        alert("greška")
    })
    this.oblastService.searchOblast(this.project.projekatOblast5).then((res) => {
       this.oblast5 = JSON.parse(JSON.stringify(res));
       })
       .catch(()=>{
        alert("greška")
    })
  
  }
  

  viewFiles(){
    this.router.navigate(["/projectfilesview"])
    //window.open('http://localhost:5000/uploads/opis1.pdf', '_blank');
  }

  evaluate(){
    this.router.navigate(["/evaluation"])
  }

  goBack(){
    
    if(this.user.lozinka == "admin246"){
      this.router.navigate(["allsales"])
    }
    else {
      this.router.navigate(["search"])
    }

  }

  // sadasnji datum dobijamo sa const event = new Date(); console.log(event.toUTCString());
}
