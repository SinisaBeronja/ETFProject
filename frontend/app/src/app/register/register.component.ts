import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institution } from '../models/Institution';
import { Oblast } from '../models/Oblast';
import { User } from '../models/User';
import { InstitutionService } from '../services/institution.service';
import { OblastService } from '../services/oblast.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private userService : UserService, private router: Router, private institutionService: InstitutionService) {}



    ngOnInit(): void {
        this.institutionService.getAllInstitution().then((resp)=>{
          this.institution = JSON.parse(JSON.stringify(resp))
         // this.oblast.sort((a, b)=>{
           // return a.nazivOblasti - b.nazivOblasti
          //})
        })
    }
    //  dovlacimo spisak svih institucija da ih imamo u select listi

    institution: Institution[] = []

    username: string = ""
    lozinka: string = ""
    ime: string = ""
    prezime: string = ""
    datumRodjenja: string = ""
    mailRukovodioca: string = ""
    telefon: string = ""
    pregledPodnetih: string = ""
    idInstitucije: number = 1

    telefonRegex: RegExp = /^((060|061|062|063|064|065|066|067)\/\d{4}-\d{3})$/;

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
        
  //       obavezno popunjavanje svih polja i regex
        if (this.username=="" || this.lozinka=="" || this.ime=="" || this.prezime=="" 
        || this.datumRodjenja=="" || this.mailRukovodioca==""
        || this.telefon=="")  {
                alert("Niste popunili sva polja")
            } 
            
            else if (!this.telefon.match(this.telefonRegex))
		{
			alert("Unesite telefon u sledećem formatu:06x/xxxx-xxx")
			
    }  

            else    
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


