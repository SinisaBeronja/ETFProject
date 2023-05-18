import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse("" + localStorage.getItem("logged",)) 
    console.log(this.user)
    console.log(this.user.lozinka);
    
  }

  user: User = new User()

  allProjects(){
		this.router.navigate(["/allprojects"])
  }

  editUser(){
    localStorage.setItem("user", JSON.stringify(this.user))
    console.log(this.user)
    this.router.navigate(["/edituser"])
  }
  // Stavljamo user u local storage, tako da ga pokupimo na stranici edit user

  inputScientificPapers(){
    this.router.navigate(["/project"])
  }

  logout(){
    localStorage.clear()
		this.router.navigate([""])
  }

}
