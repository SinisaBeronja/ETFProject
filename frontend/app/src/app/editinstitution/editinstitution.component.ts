import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institution } from '../models/Institution';
import { InstitutionService } from '../services/institution.service';

@Component({
  selector: 'app-editinstitution',
  templateUrl: './editinstitution.component.html',
  styleUrls: ['./editinstitution.component.css']
})
export class EditinstitutionComponent implements OnInit {

  constructor(private institutionService: InstitutionService, private router: Router) { }

  ngOnInit(): void {
    this.institution = JSON.parse("" + localStorage.getItem("institution",)) // ovako je bar prazan string
  }

  institution: Institution = new Institution()

  editInstitution(){
    this.institutionService.editInstitution(this.institution). then((resp) =>{
      alert("uspesna izmena")
    })
  }

  goBack(){
    this.router.navigate(["/institution"])
  }

}
