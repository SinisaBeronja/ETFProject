import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Field_names } from '../models/Field_names';
import { PoljeService } from '../services/polje.service';

@Component({
  selector: 'app-editpolje',
  templateUrl: './editpolje.component.html',
  styleUrls: ['./editpolje.component.css']
})
export class EditpoljeComponent implements OnInit {

  constructor(private poljeService: PoljeService, private router: Router) { }

  ngOnInit(): void {
    this.polje = JSON.parse("" + localStorage.getItem("polje")) // ovako je bar prazan string
  }

  polje: Field_names = new Field_names()
  msgblank: boolean = true
  msg1: boolean = false
  msg2: boolean = false
  showbtnizmena: boolean = true

  editPolje(){
    this.poljeService.editPolje(this.polje). then((resp) =>{
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
    this.router.navigate(["/polja"])
  }

}