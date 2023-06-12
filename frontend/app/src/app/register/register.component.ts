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

    regexIme = new RegExp("[A-ZÖ][a-zö]+");
    regexPrezime = new RegExp("[A-ZÖ][a-zö]+")
    regexUsername = new RegExp("^[a-z]+\d*\w*$");
    regexlozinka = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/);
    regexDatumRodjenja = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2}\.)$/gm;
    regexMailRukovodioca = /^\w+@\w+\.[a-z]{2,3}$/;
    regextelefon: RegExp = /^((060|061|062|063|064|065|066|067)\/\d{3}-\d{3,4})$/;

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
        
  // obavezno popunjavanje svih polja i regex
 if(this.ime==""){
    alert("Niste popunili ime")
    }
   else if (!this.ime.match(this.regexIme))
    {
    alert("Potrebno je da ime počinje velikim slovom")   
    }  
    else if(this.prezime==""){
    alert("Niste popunili prezime")
    }
    else if (!this.prezime.match(this.regexPrezime))
    {
    alert("Potrebno je da prezime počinje velikim slovom")   
    }  
    else if(this.username==""){
    alert("Niste popunili korisničko ime")
    }
    else if (!this.username.match(this.regexUsername))
    {
    alert("Korisničko ime može imati mala slova, brojeve i znake")   
    }  
    else if (this.lozinka=="")  {
    alert("Niste popunili lozinku")
    } 
    else if (!this.lozinka.match(this.regexlozinka))
    {
    alert("Lozinka se sastoji od malih i velikih slova, brojeva i znakova i ima 8 - 16 karaktera")   
    }  
    else if(this.datumRodjenja==""){
    alert("Niste popunili datum rođenja")
    }
    else if (!this.datumRodjenja.match(this.regexDatumRodjenja))
    {
    alert("Unesite datum u sledećem formatu: dd.mm.gggg.")   
    }  
    else if(this.mailRukovodioca==""){
    alert("Niste popunili mejl")
    }
    else if (!this.mailRukovodioca.match(this.regexMailRukovodioca))
    {
    alert("Mejl nije u dobrom formatu")
    }  
    else if(this.telefon==""){
    alert("Niste popunili telefon")
    }
    else if (!this.telefon.match(this.regextelefon))
	{
	alert("Unesite telefon u sledećem formatu:06x/xxxx-xxx")	
    } 
    else if
        (this.idInstitucije<2){
        alert("Izbaretite instituciju iz padajuće liste")  
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


