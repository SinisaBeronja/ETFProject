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

  msgblank: boolean = true
  msg1: boolean = false
  msg2: boolean = false
  showbtnizmena = true


  ngOnInit(): void {
    this.institution = JSON.parse("" + localStorage.getItem("institution",)) // ovako je bar prazan string
  }

  institution: Institution = new Institution()

  editInstitution(){
    console.log(this.institution)
    this.institutionService.editInstitution(this.institution). then((resp) =>{
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
    this.router.navigate(["/institution"])
  }

}
