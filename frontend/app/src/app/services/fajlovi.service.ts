import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Fajlovi } from '../models/fajlovi';

@Injectable({
  providedIn: 'root'
})
export class FajloviService {

  backend = 'http://localhost:5000';
  
  constructor(private http: HttpClient) { }

  insertFiles(fajlovi: Fajlovi){
    return firstValueFrom(this.http.post(`${this.backend}/files/insertFiles`, fajlovi)) 
  }

}
