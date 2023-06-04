import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Field_names } from '../models/Field_names';

@Injectable({
  providedIn: 'root'
})
export class PoljeService {

  constructor(private http: HttpClient) { }

  backend = 'http://localhost:5000'

  getAllPolje(){
    return firstValueFrom(this.http.get(`${this.backend}/field_names/getAllField_names`))
  }
  
 
  editPolje(polje:Field_names){
    return firstValueFrom(this.http.put(`${this.backend}/field_names/editField_names`, polje))
  }


}