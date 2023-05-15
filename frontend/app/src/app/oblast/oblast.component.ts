import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OblastService } from '../services/oblast.service';
import { Oblast } from '../models/Oblast';
import { User } from '../models/User';

@Component({
  selector: 'app-oblast',
  templateUrl: './oblast.component.html',
  styleUrls: ['./oblast.component.css']
})
export class OblastComponent implements OnInit {

  constructor(private oblastService: OblastService, private router: Router) { }

  oblasti: Oblast[] = []
  nazivOblasti: string = ""
  user: User = new User()

  ngOnInit(): void {
    this.oblastService.getAllOblast().then((resp)=>{
      this.oblasti = JSON.parse(JSON.stringify(resp))
     // this.oblast.sort((a, b)=>{
       // return a.nazivOblasti - b.nazivOblasti
      //})
    })
    this.user = JSON.parse("" + localStorage.getItem("logged",)) 
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

  goBack(){
    if(this.user.lozinka == "admin246"){
      this.router.navigate(["admin"])
    }
    else {
      this.router.navigate(["project"])
    }
  }
  // Ako je admin vraca ga na stranu admin, odakle je pozvan. Za usera vraća na stranu project, odakle je pozvan.

}
