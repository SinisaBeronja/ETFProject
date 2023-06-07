import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http'
import { AuthResponse } from '../models/AuthResponse'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

    

    constructor(private userService : UserService, private router: Router, private http: HttpClient ) {}

    ngOnInit(): void {}

    username: string = "";
    lozinka: string = "";
    phoneNumber : string = "";
    pattern = /\+3816\d{8}/;
    code = '';
    codeSent = false;
    loggedIn = false;
    token! : string;

    login(){
       // obavezno popunjavanje svih polja
       if(this.username==""){
        alert("Niste popunili korisničko ime")
       }
        else if(this.lozinka==""){
          alert("Niste popunili lozinku")
        }
      else
        this.userService.login(this.username, this.lozinka).then((resp)=>{
          let user: User = JSON.parse(JSON.stringify(resp))
         
          if (user != null){
            localStorage.setItem("logged", JSON.stringify(user))
            if (user.lozinka == "admin246"){                   
              this.router.navigate(["admin"])
            }
            else{
              this.loggedIn = true;

/*               this.router.navigate(["user"]) */
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

    sendCode() {
      const regex = new RegExp(this.pattern);
      const isValid = regex.test(this.phoneNumber);
      if (isValid) {
      this.http.post<AuthResponse>('http://localhost:5000/api/login', {
        username: this.username,
        password: this.lozinka,
        phoneNumber: this.phoneNumber
      }).subscribe((res) => {
        if (res.success) {
          this.token = res.token;
          console.log(this.token);
        }
      });
      this.codeSent = true;
    }
    else {
      alert("Pogresan unos");
    }
    }
    verifyCode() {
      this.http.post<AuthResponse>('http://localhost:5000/api/verify', { code: this.code, token: this.token })
        .subscribe((res) => {
          console.log(this.code, this.token);
          console.log("request sent");
          if (res.success) {
            this.router.navigate(["user"]);
          } else {
            alert("Pogresan kod");
          }
        });
    }

    
}




