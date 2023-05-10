import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}

  backend = 'http://localhost:5000';


  register(user: User){
    return firstValueFrom(this.http.post(`${this.backend}/users/register`, user))
  }


  login(username: string, lozinka: string) {
    let user = new User(); // napravimo user
    user.username = username; // setujemo kor_ime i lozinku koja je uneta
    user.lozinka = lozinka; // i to saljemo post
    return firstValueFrom(this.http.post(`${this.backend}/users/login`, user));
  }

  // regExIme(ime: string){
  //  return firstValueFrom(this.http.post(`${this.backend}/users/regExIme`, ime))
  // }
  
  //probala da uradim regex, nije dovršeno


}
