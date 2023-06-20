import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Field_names } from '../models/Field_names';
import { PoljeService } from '../services/polje.service';

@Component({
  selector: 'app-polja',
  templateUrl: './polja.component.html',
  styleUrls: ['./polja.component.css']
})
export class PoljaComponent implements OnInit {
 

  constructor(private router: Router, private poljeService: PoljeService) { }

  polja: Field_names[] = []
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
    this.poljeService.getAllPolje().then((resp)=>{
      this.polja = JSON.parse(JSON.stringify(resp))
    })
    console.log(this.polja)
  }

  editPolje(polje:Field_names){
    localStorage.setItem("polje", JSON.stringify(polje))
    this.router.navigate(["editpolje"])
  }







  goBack(){
    this.router.navigate(["admin"])
  }

}
