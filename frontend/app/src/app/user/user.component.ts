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
  }

  user: User = new User()

  allProjects(){
		this.router.navigate(["/allprojects"])
  }

  editUser(){
    this.router.navigate(["/edituser"])
  }

  inputScientificPapers(){
    this.router.navigate(["/uploads"])
  }

  goBack(){
		this.router.navigate([""])
  }

}
