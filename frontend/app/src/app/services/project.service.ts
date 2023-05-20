import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {}

  backend = 'http://localhost:5000';


  getAllProjects(){
    return firstValueFrom(this.http.get(`${this.backend}/project/getAllProjects`))
  }

  getAllProjectsUser(idRukovodioca: number){
    return firstValueFrom(this.http.get(`${this.backend}/project/getAllProjectsUser/${idRukovodioca}`))
  }

  insertProject(project: Project){
    return firstValueFrom(this.http.post(`${this.backend}/project/insertProject`, project))
  }

  GetOneProject(idProjekta: number){
    return firstValueFrom(this.http.get(`${this.backend}/project/searGetOneProjectch/${idProjekta}`))
  }
    

}
