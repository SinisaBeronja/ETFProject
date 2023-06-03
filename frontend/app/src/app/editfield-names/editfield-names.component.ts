import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Field_names } from '../models/Field_names';
import { Field_namesService } from '../services/field-names.service';

@Component({
  selector: 'app-editfield-names',
  templateUrl: './editfield-names.component.html',
  styleUrls: ['./editfield-names.component.css']
})
export class EditfieldNamesComponent implements OnInit {

  constructor(private field_namesService: Field_namesService, private router: Router) { }

  ngOnInit(): void {
    this.name = JSON.parse("" + localStorage.getItem("name"))
    console.log(this.name)
  }

  name: Field_names = new Field_names()
 

  editField_names(){
    this.field_namesService.editField_names(this.name). then((resp) =>{
      alert("uspešna izmena")
    })
  }

  goBack(){
    this.router.navigate(["/field_names"])
  }

}

