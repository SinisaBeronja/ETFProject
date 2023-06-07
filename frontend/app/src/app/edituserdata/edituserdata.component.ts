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

  editUser(){
    this.userService.editUser(this.rukovodioc).then((resp) =>{
      alert("Uspešna izmena")
      localStorage.setItem("rukovodioc", JSON.stringify(this.rukovodioc))
     
    })
  }


  
  goBack(){
    this.router.navigate(["/edituser"])
  }


}
