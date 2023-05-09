import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private userService : UserService, private router: Router) {}

    ngOnInit(): void {}

    username: string = ""
    lozinka: string = ""
    ime: string = ""
    prezime: string = ""
    datumRodjenja: string = ""
    mailRukovodioca: string = ""
    telefon: string = ""
    pregledPodnetih: string = ""
    idInstitucije: number = 1


    register(){
        let user = new User();
        user.username = this.username
        user.lozinka = this.lozinka
        user.ime = this.ime
        user.prezime = this.prezime
        user.datumRodjenja = this.datumRodjenja
        user.mailRukovodioca = this.mailRukovodioca
        user.telefon = this.telefon
        user.idInstitucije = this.idInstitucije
        user.pregledPodnetih = ""

        this.userService.register(user).then((resp) =>{
            alert("Uspesno dodat rukovodioc")
        })
        .catch(()=>{
            alert("Greska - rukovodioc nije dodat")
        })
    }

    goBack(){
        this.router.navigate([""])  
    }

   

}


