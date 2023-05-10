import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private userService : UserService, private router: Router ) {}

    ngOnInit(): void {}

    username: string = ""
    lozinka: string = ""

    login(){
        this.userService.login(this.username, this.lozinka).then((resp)=>{
          let user: User = JSON.parse(JSON.stringify(resp))
          if (user != null){
            localStorage.setItem("logged", JSON.stringify(user))
            if (user.lozinka == "admin246"){                   
              this.router.navigate(["admin"])
            }
            else{
              this.router.navigate(["user"])
            }
          }
          else{
            alert("No user")
          }
          
        }).catch(() =>{
          alert("error")
        })
    } 

    goToRegister(){
      this.router.navigate(["/register"])
    }

    goToLostPasword(){
      this.router.navigate(["/lostpassword"])
    }


// Regex provera polja, potrebno dovršiti i postaviti

//if(username==""||lozinka==""){
//       alert("Niste popunili sva polja")
//       return false;
//  }



}




