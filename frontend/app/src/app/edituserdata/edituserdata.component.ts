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
    this.korisnik = JSON.parse("" + localStorage.getItem("logged",)) // ovako je bar prazan string
    console.log(this.korisnik)
  }
  // Pokupimo user iz local storage-a gde smo ga stavili u komponenti koja je pozvala ovu stranu

  korisnik: User = new User()
  

  editUser(){
    console.log(this.korisnik)
    this.userService.editUser(this.korisnik). then((resp) =>{
      alert("uspešna izmena")
    })
    .catch((res) => {
      alert(res.error)
    })
  }

  
  goBack(){
    this.router.navigate(["/user"])
  }


}
