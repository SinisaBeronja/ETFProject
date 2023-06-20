import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edituserdata',
  templateUrl: './edituserdata.component.html',
  styleUrls: ['./edituserdata.component.css']
})
export class EdituserdataComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.rukovodioc = JSON.parse("" + localStorage.getItem("rukovodioc",)) // ovako je bar prazan string
  }

  rukovodioc: User = new User()
  msgblank: boolean = true
  msg1: boolean = false
  msg2: boolean = false
  showbtnizmena: boolean = true


  editUser(){
    this.userService.editUser(this.rukovodioc).then((resp) =>{
      //alert("Uspešna izmena")
      this.msgblank = true
      this.msg1 = true
      this.msg2 = false
      this.showbtnizmena = false
        
      localStorage.setItem("rukovodioc", JSON.stringify(this.rukovodioc))
      localStorage.setItem("user", JSON.stringify(this.rukovodioc))
     
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
    this.router.navigate(["/edituser"])
  }


}
