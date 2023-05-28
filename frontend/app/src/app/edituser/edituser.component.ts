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

  rukovodioci: User[] = []
  username: string = ""
  lozinka: string = ""
  ime: string = ""
  prezime: string = ""
  datumRodjenja: string = "" ;
  mailRukovodioca: string = ""
  telefon: string = ""

  user: User = new User()

  ngOnInit(): void {
    this.userService.getAllUsers().then((resp)=>{
      this.rukovodioci = JSON.parse(JSON.stringify(resp))
          this.user = JSON.parse("" + localStorage.getItem("user",)) 
    })
  }

  editUser(user:User){
    localStorage.setItem("rukovodioc", JSON.stringify(this.user))
    this.router.navigate(["edituserdata"])
  }
  // stavljamo rukovodioci u localstorage da bi ga pokupili na strani za editovanje podataka rukovodioca
  // u html listamo sve usere ali vidimo samo ako je njegov id == sa ulogovanim userom (logged user. idRukovodioca)


  goBack(){
      this.router.navigate(["user"])
    }
  
}
