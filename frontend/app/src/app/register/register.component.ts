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
    
    //regExIme(){
    //    let regex = new RegEx("^[A-Z][a-z]+$");
    //    this.userService.regExIme(this.ime).then((resp) =>{
    //        if (!regex.test(this.ime)) {
     //           alert("Neispravno ime")
    //    }

    // Probala da uradim regex, nije dovršeno
    
    }
    

        // Regex provera polja, potrebno dovršiti i postaviti

        // Provera imena i prezimena

        //  let regex = new RegExp("^[A-Z][a-z]+$");
        //  if (!regex.test(string)) {
        //  alert("Neispravno ime");
        //  return false;
        // } else {
        //  return true;
        // }

        // Provera za telefon u odredjenom formatu

        // let regexTelefon = /^((060|061|062|063|064|065|066|067)\/\d{4}-\d{3})$/;
        // if(!regexTelefon.test(telefon)){
        //    alert("Neispravan format za unos telefona")
        // }
        // else{
        // return true;
        // }


        // Provera da li su sva polja popunjena

        // if(ime==""||prezime==""|| username==""|| lozinka==""||kategorija==""|| 
        // datumRodjenja=="" mailRukovodioca==""|| telefon==""){
        //       alert("Niste popunili sva polja")
        //      return false;
        //   }

  
