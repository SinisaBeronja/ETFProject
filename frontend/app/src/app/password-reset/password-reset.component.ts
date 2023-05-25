import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent {
  email!: string;

  constructor(private http: HttpClient) {}

  submitForm() {
    const formData = { email: this.email };

    this.http.post('http://localhost:5000/password-reset', formData).subscribe(
      () => {
        console.log('Password reset request sent successfully.');
        // Display success message to the user
      },
      (error) => {
        console.error('Error occurred during password reset:', error);
        // Display error message to the user
      }
    );
  }
}