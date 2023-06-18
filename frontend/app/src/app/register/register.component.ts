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
    regexUsername = new RegExp("[A-ZÖ][a-zö]+");
    regexlozinka = new RegExp("[A-ZÖ][a-zö]+");
    regexDatumRodjenja = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2}\.)$/gm;
    regexMailRukovodioca = /^\w+@\w+\.[a-z]{2,3}$/;
    regextelefon: RegExp = /^((060|061|062|063|064|065|066|067)\/\d{3}-\d{3,4})$/;

    msgblank: boolean = true
    msg1: boolean = false
    msg2: boolean = false
    msg3: boolean = false
    msg4: boolean = false
    msg5: boolean = false
    msg6: boolean = false
    msg7: boolean = false
    msg8: boolean = false
    msg9: boolean = false
    msg10: boolean = false
    msg11: boolean = false
    msg12: boolean = false
    msg13: boolean = false
    msg14: boolean = false
    msg15: boolean = false
    msg16: boolean = false
    msg17: boolean = false
    showbtnizmena: boolean = true

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
    //alert("Niste popunili ime")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = true
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.showbtnizmena = true
    }
   else if (!this.ime.match(this.regexIme))
    {
    //alert("Potrebno je da ime počinje velikim slovom")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = true
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.showbtnizmena = true   
    }  
    else if(this.prezime==""){
    //alert("Niste popunili prezime")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = true
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.showbtnizmena = true
    }
    else if (!this.prezime.match(this.regexPrezime))
    {
    //alert("Potrebno je da prezime počinje velikim slovom")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = true
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.showbtnizmena = true   
    }  
    else if(this.username==""){
    //alert("Niste popunili korisničko ime")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = true
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.showbtnizmena = true
    }
    else if (!this.username.match(this.regexUsername))
    {
    //alert("Korisničko ime može imati mala slova, brojeve i znake")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = true
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.showbtnizmena = true   
    }  
    else if (this.lozinka=="")  {
    //alert("Niste popunili lozinku")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = true
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.showbtnizmena = true
    } 
    else if (!this.lozinka.match(this.regexlozinka))
    {
    //alert("Lozinka se sastoji od malih i velikih slova, brojeva i znakova i ima 8 - 16 karaktera")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = true
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.showbtnizmena = true   
    }  
    else if(this.datumRodjenja==""){
    //alert("Niste popunili datum rođenja")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = true
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.showbtnizmena = true
    }
    else if (!this.datumRodjenja.match(this.regexDatumRodjenja))
    {
    //alert("Unesite datum u sledećem formatu: dd.mm.gggg.")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = true
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.showbtnizmena = true   
    }  
    else if(this.mailRukovodioca==""){
    //alert("Niste popunili mejl")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = true
    this.msg14 = false
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.showbtnizmena = true
    }
    else if (!this.mailRukovodioca.match(this.regexMailRukovodioca))
    {
    //alert("Mejl nije u dobrom formatu")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = true
    this.msg15 = false
    this.msg16 = false
    this.msg17 = false
    this.showbtnizmena = true
    }  
    else if(this.telefon==""){
    //alert("Niste popunili telefon")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = true
    this.msg16 = false
    this.msg17 = false
    this.showbtnizmena = true
    }
    else if (!this.telefon.match(this.regextelefon))
	{
	//alert("Unesite telefon u sledećem formatu:06x/xxxx-xxx")
    this.msgblank = false
    this.msg1 = false
    this.msg2 = false
    this.msg3 = false
    this.msg4 = false
    this.msg5 = false
    this.msg6 = false
    this.msg7 = false
    this.msg8 = false
    this.msg9 = false
    this.msg10 = false
    this.msg11 = false
    this.msg12 = false
    this.msg13 = false
    this.msg14 = false
    this.msg15 = false
    this.msg16 = true
    this.msg17 = false
    this.showbtnizmena = true	
    } 
    else if
        (this.idInstitucije<2){
        //alert("Izbaretite instituciju iz padajuće liste")
        this.msgblank = false
        this.msg1 = false
        this.msg2 = false
        this.msg3 = false
        this.msg4 = false
        this.msg5 = false
        this.msg6 = false
        this.msg7 = false
        this.msg8 = false
        this.msg9 = false
        this.msg10 = false
        this.msg11 = false
        this.msg12 = false
        this.msg13 = false
        this.msg14 = false
        this.msg15 = false
        this.msg16 = false
        this.msg17 = true
        this.showbtnizmena = true  
    }
    else    
    
        this.userService.register(user).then((resp) =>{
            //alert("Uspesno dodat rukovodioc")
            this.msgblank = true
            this.msg1 = true
            this.msg2 = false
            this.msg3 = false
            this.msg4 = false
            this.msg5 = false
            this.msg6 = false
            this.msg7 = false
            this.msg8 = false
            this.msg9 = false
            this.msg10 = false
            this.msg11 = false
            this.msg12 = false
            this.msg13 = false
            this.msg14 = false
            this.msg15 = false
            this.msg16 = false
            this.msg17 = false      
            this.showbtnizmena = false
        })
        .catch(()=>{
            //alert("Greska - rukovodioc nije dodat")
            this.msgblank = false
            this.msg1 = false
            this.msg2 = true
            this.msg3 = false
            this.msg4 = false
            this.msg5 = false
            this.msg6 = false
            this.msg7 = false
            this.msg8 = false
            this.msg9 = false
            this.msg10 = false
            this.msg11 = false
            this.msg12 = false
            this.msg13 = false
            this.msg14 = false
            this.msg15 = false
            this.msg16 = false
            this.msg17 = false      
            this.showbtnizmena = true
        })
    }

    goBack(){
        this.router.navigate([""])  
    }

   

}


