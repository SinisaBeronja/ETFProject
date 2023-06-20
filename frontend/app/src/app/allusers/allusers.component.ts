import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }


  users: User[] = []
  p: number = 1
 

  ngOnInit(): void {
    this.userService.getAllUsers().then((resp)=>{
      this.users = JSON.parse(JSON.stringify(resp))
          //this.users.sort((a, b)=>{
          //return a.prezime - b.prezime
          //})
    })
  }
  // Prikazuje spisak svih user-a

  goBack(){
		this.router.navigate(["/admin"])
	  }

}