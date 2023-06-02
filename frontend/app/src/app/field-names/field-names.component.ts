import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Field_names } from '../models/Field_names';
import { Field_namesService } from '../services/field-names.service';

@Component({
  selector: 'app-field-names',
  templateUrl: './field-names.component.html',
  styleUrls: ['./field-names.component.css']
})
export class FieldNamesComponent implements OnInit {

  constructor(private field_namesService: Field_namesService, private router: Router) { }

  field_names: Field_names[] = []
  polje1: string = ""
  polje2: string = ""
  polje3: string = ""
  polje4: string = ""
  polje5: string = ""
  polje6: string = ""
  polje7: string = ""
  polje8: string = ""
  polje9: string = ""
  polje10: string = ""
  polje11: string = ""
  polje12: string = ""
 

  ngOnInit(): void {
    this.field_namesService.getAllField_names().then((resp)=>{
      this.field_names = JSON.parse(JSON.stringify(resp))
    })
  }

  
  editField_names(){
    //this.router.navigate(["editField_names"])
  }


  goBack(){
      this.router.navigate(["admin"])
    }
  

}

