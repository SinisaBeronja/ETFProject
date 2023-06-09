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
    
  editProjectStatus(project: Project){
    return firstValueFrom(this.http.post(`${this.backend}/project/editProjectStatus`, project))
  }

  editProject(projekat_za_unos: Project){
    return firstValueFrom(this.http.put(`${this.backend}/project/editProject`, projekat_za_unos))
  }

  editStatus(projekat: Project){
    return firstValueFrom(this.http.put(`${this.backend}/project/editStatus`, projekat))
  }

  deleteProjectFirstPage(nazivProjekta: string){
    return firstValueFrom(this.http.delete(`${this.backend}/project/deleteProjectFirstPage/${nazivProjekta}`))
  }
    
  editOneProject(projekat: Project){
    return firstValueFrom(this.http.put(`${this.backend}/project/editOneProject`, projekat))
  }
    
  projectUpdate(projekat: Project){
    return firstValueFrom(this.http.put(`${this.backend}/project/projectUpdate`, projekat))
  }


}