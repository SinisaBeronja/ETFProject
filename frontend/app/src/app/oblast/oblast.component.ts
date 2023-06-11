import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OblastService } from '../services/oblast.service';
import { Oblast } from '../models/Oblast';
import { User } from '../models/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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

  grupaOblast = new FormGroup({
    nazivOblasti: new FormControl("", [Validators.required, Validators.minLength(4), Validators.pattern(/^[A-Z]/)])
  })
  // naziv je obavezan, min 4 karaktera i pocinje velikim slovom
  // iz HTML-a izbacujemo ngModel a ubacujemo sta ima...

  msgblank: boolean = true
  msg1: boolean = false
  msg2: boolean = false
  showbtnizmena = true


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
      //alert("Izbrisano")
      this.ngOnInit()   // ponovo prikazuje sve oblasti iz ngOnInit
    })
  }


  insertOblast(){
    if (this.grupaOblast.valid) {
      let oblast: Oblast = {
        idOblasti: 100,
        nazivOblasti: this.grupaOblast.get("nazivOblasti")?.value || ""
      }
      console.log(oblast)
    //  - - - Ovo je logika za ngModel  - - -  // 
    //let oblast = new Oblast();  
    //oblast.nazivOblasti = this.nazivOblasti
      this.oblastService.insertOblast(oblast).then((resp) =>{
      //alert("Dodata oblast")
      this.msgblank = true
      this.msg1 = true
      this.msg2 = false
      this.showbtnizmena = false
        this.ngOnInit()
      })
      .catch(()=>{
        //alert("Greska - oblast nije dodata")
        this.msgblank = false
        this.msg1 = false
        this.msg2 = true
        this.showbtnizmena = true
      })
      
      
    }
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
