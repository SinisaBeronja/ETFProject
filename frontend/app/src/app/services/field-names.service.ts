import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Field_names } from '../models/Field_names';

@Injectable({
  providedIn: 'root'
})
export class Field_namesService {

  constructor(private http: HttpClient) { }

  backend = 'http://localhost:5000'

  getAllField_names(){
    return firstValueFrom(this.http.get(`${this.backend}/field_names/getAllField_names`))
  }

  editField_names(field_names:Field_names){
    return firstValueFrom(this.http.put(`${this.backend}/field_names/editField_names`, field_names))
  }

}
