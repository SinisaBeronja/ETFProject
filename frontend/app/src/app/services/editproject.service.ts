import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class EditprojectService {

  constructor(private http: HttpClient) {}

  backend = 'http://localhost:5000';

  editOneProject(project:Project){
    return firstValueFrom(this.http.put(`${this.backend}/project/editOneProject`, project))
  }
 
  
}
