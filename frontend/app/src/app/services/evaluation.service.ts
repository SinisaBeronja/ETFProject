import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  backend = 'http://localhost:5000';
  
  constructor(private http: HttpClient) { }

  editStatus(projekat: Project){
    return firstValueFrom(this.http.put(`${this.backend}/evaluation/editStatus`, projekat))
  }

}
