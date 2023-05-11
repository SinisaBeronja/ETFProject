import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {}

  backend = 'http://localhost:5000';


  getAllProjects(){
    return firstValueFrom(this.http.get(`${this.backend}/project/getAllProjects`))
  }
}
