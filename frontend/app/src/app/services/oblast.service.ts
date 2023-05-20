import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Oblast } from '../models/Oblast';

@Injectable({
  providedIn: 'root'
})
export class OblastService {

  constructor(private http: HttpClient) { }

  backend = 'http://localhost:5000'

  getAllOblast(){
    return firstValueFrom(this.http.get(`${this.backend}/oblast/getAllOblast`))
  }
  
  insertOblast(oblast: Oblast){
    return firstValueFrom(this.http.post(`${this.backend}/oblast/`, oblast)) 
  }

  editOblast(oblast:Oblast){
    return firstValueFrom(this.http.put(`${this.backend}/oblast/editOblast`, oblast))
  }

  deleteOblast(oblast:Oblast){
    return firstValueFrom(this.http.delete(`${this.backend}/oblast/deleteOblast/${oblast.idOblasti}`))
  }

  searchOblast(idOblasti: number){
    return firstValueFrom(this.http.get(`${this.backend}/oblast/search/${idOblasti}`))
  }

}
