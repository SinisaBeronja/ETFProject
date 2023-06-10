import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/Project';
import { ProjektiZaIzmenu } from '../models/ProjekatZaIzmenu';
import { ProjektiComponent } from '../projekti/projekti.component';
import { ProjectService } from '../services/project.service';
import { ProjekatzaizmenuService } from '../services/projekatzaizmenu.service';

@Component({
  selector: 'app-projekatupdate',
  templateUrl: './projekatupdate.component.html',
  styleUrls: ['./projekatupdate.component.css']
})
export class ProjekatupdateComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router, private projekatzaizmenuService: ProjekatzaizmenuService) { }

  ngOnInit(): void {
    this.projekat = JSON.parse("" + localStorage.getItem("projekat")) // ovako je bar prazan string
  }

  projekat: ProjektiZaIzmenu = new ProjektiZaIzmenu()

  projekatUpdate(){
    this.projekatzaizmenuService.editProjekatpolje(this.projekat). then((resp) =>{
      alert("uspešna izmena")
})
  }

  goBack(){
    this.router.navigate(["/projekti"])
  }

}
