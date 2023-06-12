import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oblast } from '../models/Oblast';
import { OblastService } from '../services/oblast.service';

@Component({
  selector: 'app-editoblast',
  templateUrl: './editoblast.component.html',
  styleUrls: ['./editoblast.component.css']
})
export class EditoblastComponent implements OnInit {

  constructor(private oblastService: OblastService, private router: Router) { }

  ngOnInit(): void {
    this.oblast = JSON.parse("" + localStorage.getItem("oblast",)) // ovako je bar prazan string
  }

  oblast: Oblast = new Oblast()

  msgblank: boolean = true
  msg1: boolean = false
  msg2: boolean = false
  showbtnizmena: boolean = true

  editOblast(){
    console.log(this.oblast)
    this.oblastService.editOblast(this.oblast). then((resp) =>{
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
    this.router.navigate(["/oblast"])
  }
  
}


