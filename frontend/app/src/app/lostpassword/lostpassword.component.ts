import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lostpassword',
  templateUrl: './lostpassword.component.html',
  styleUrls: ['./lostpassword.component.css']
})
export class LostpasswordComponent implements OnInit {

  constructor(private http: HttpClient) { }
  email!: string;
  ngOnInit(): void {
  }
  regexEmail = /^\w+@\w+\.[a-z]{2,3}$/;
  // regexEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/; moze ovaj regex - radi
  msgblank: boolean = true
  msg1: boolean = false
  msg2: boolean = false
  msg3: boolean = false
  msg4: boolean = false
  showbtnizmena: boolean = true

  submitForm() {
    const formData = { email: this.email };
    if(this.email==null){
      //alert("Niste popunili mejl")
      this.msgblank = false
      this.msg1 = false
      this.msg2 = true
      this.msg3 = false
      this.msg4 = false
      this.showbtnizmena = true
     }
     else if (!this.email.match(this.regexEmail))
     {
     //alert("Mejl nije u dobrom formatu")
     this.msgblank = false
     this.msg1 = false
     this.msg2 = false
     this.msg3 = true
     this.msg4 = false
     this.showbtnizmena = true
     }
     else
    this.http.post('http://localhost:5000/password-reset', formData).subscribe(
      () => {
        console.log('Password reset request sent successfully.');
        // Display success message to the user
      },
      (error) => {
        console.error('Error occurred during password reset:', error);
        //alert("Ne postoji korisnik sa tom mejl adresom")
              // Display error message to the user
              this.msgblank = false
     this.msg1 = false
     this.msg2 = false
     this.msg3 = false
     this.msg4 = true
     this.showbtnizmena = true
      }
    );
  }
}
