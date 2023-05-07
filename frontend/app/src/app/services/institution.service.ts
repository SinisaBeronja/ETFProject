import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Institution } from '../models/Institution';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(private http: HttpClient) { }

  backend = 'http://localhost:5000'

  getAllInstitution(){
    return firstValueFrom(this.http.get(`${this.backend}/institution/getAllInstitution`))
  }
  
  insertInstitution(institution: Institution){
    return firstValueFrom(this.http.post(`${this.backend}/institution/`, institution)) 
  }

  editInstitution(institution:Institution){
    return firstValueFrom(this.http.put(`${this.backend}/institution/editInstitution`, institution))
  }

  deleteInstitution(institution:Institution){
    return firstValueFrom(this.http.delete(`${this.backend}/institution/deleteInstitution/${institution.idInstitucije}`))
  }
}
