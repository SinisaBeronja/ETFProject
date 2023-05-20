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
  submitForm() {
    const formData = { email: this.email };

    this.http.post('http://localhost:5000/password-reset', formData).subscribe(
      () => {
        console.log('Password reset request sent successfully.');
        // Display success message to the user
      },
      (error) => {
        console.error('Error occurred during password reset:', error);
        alert("Ne postoji korisnik sa tom mejl adresom")
        // Display error message to the user
      }
    );
  }
}
