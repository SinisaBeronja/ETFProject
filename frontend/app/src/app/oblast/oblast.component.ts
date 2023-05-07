import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OblastService } from '../services/oblast.service';
import { Oblast } from '../models/Oblast';

@Component({
  selector: 'app-oblast',
  templateUrl: './oblast.component.html',
  styleUrls: ['./oblast.component.css']
})
export class OblastComponent implements OnInit {

  constructor(private oblastService: OblastService, private router: Router) { }

  oblasti: Oblast[] = []
  nazivOblasti: string = ""

  ngOnInit(): void {
    this.oblastService.getAllOblast().then((resp)=>{
      this.oblasti = JSON.parse(JSON.stringify(resp))
     // this.oblast.sort((a, b)=>{
       // return a.nazivOblasti - b.nazivOblasti
      //})
    })
  }

  editOblast(oblast:Oblast){
    localStorage.setItem("oblast", JSON.stringify(oblast))
    this.router.navigate(["editoblast"])
  }


  deleteOblast(oblast:Oblast){
    this.oblastService.deleteOblast(oblast).then((resp) =>{
      alert("Izbrisano")
      this.ngOnInit()   // ponovo prikazuje sve oblasti iz ngOnInit
    })
  }


  insertOblast(){
    let oblast = new Oblast();
    oblast.nazivOblasti = this.nazivOblasti
    this.oblastService.insertOblast(oblast).then((resp) =>{
      alert("Dodata oblast")
      this.ngOnInit()
    })
    .catch(()=>{
      alert("Greska - oblast nije dodata")
    })
  }

}
