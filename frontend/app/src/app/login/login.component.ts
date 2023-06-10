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


    msgblank1: boolean = true
    msg1: boolean = false
    msg2: boolean = false
    msg3: boolean = false
    msg4: boolean = false
    msg5: boolean = false
    msgblank2: boolean = false
    msg6: boolean = false
    msg7: boolean = false
    

    login(){
       // obavezno popunjavanje svih polja
       if(this.username==""){
        //alert("Niste popunili korisničko ime")
        this.msgblank1 = false
        this.msg1 = false
        this.msg2 = false
        this.msg3 = true
        this.msg4 = false
        this.msg5 = false
       }
        else if(this.lozinka==""){
          //alert("Niste popunili lozinku")
          this.msgblank1 = false
          this.msg1 = false
          this.msg2 = false
          this.msg3 = false
          this.msg4 = true
          this.msg5 = false
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
            //alert("No user")
              this.msgblank1 = false
              this.msg1 = false
              this.msg2 = true
              this.msg3 = false
              this.msg4 = false
              this.msg5 = false
            
          }
          
        }).catch(() =>{
          //alert("error")
            this.msgblank1 = false
            this.msg1 = false
            this.msg2 = false
            this.msg3 = false
            this.msg4 = false
            this.msg5 = true
          
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
      this.msgblank2 = false
      this.msg6 = false
      this.msg7 = false
    }
    else {
      alert("Pogrešan unos");
            this.msgblank2 = false
            this.msg6 = true
            this.msg7 = false
    }
    }
    verifyCode() {
          
      this.http.post<AuthResponse>('http://localhost:5000/api/verify', { code: this.code, token: this.token })
        .subscribe((res) => {
          console.log(this.code, this.token);
          console.log("Poslat upit");
          if (res.success) {
            this.router.navigate(["user"]);
          } else {
            alert("Pogrešan kod");
            this.msgblank2 = false
            this.msg6 = false
            this.msg7 = true
          }
        });
    }

    
}




