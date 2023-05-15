import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse("" + localStorage.getItem("user")) // ovako je bar prazan string
  }
  // Pokupimo user iz local storage-a gde smo ga stavili u komponenti koja je pozvala ovu stranu

  user: User = new User()

  editUser(){
    this.userService.editUser(this.user). then((resp) =>{
      alert("uspesna izmena")
    })
  }

  
  goBack(){
    this.router.navigate(["/user"])
  }

}
