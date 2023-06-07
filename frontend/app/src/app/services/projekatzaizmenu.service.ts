import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ProjektiZaIzmenu } from '../models/ProjekatZaIzmenu';

@Injectable({
  providedIn: 'root'
})
export class ProjekatzaizmenuService {

  backend = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getAllProjektiZaIzmenu(){
    return firstValueFrom(this.http.get(`${this.backend}/projektizaizmenu/getAllProjektizaizmenu`))
  }

  editProjekatpolje(projekatzaizmenu: ProjektiZaIzmenu){
    return firstValueFrom(this.http.put(`${this.backend}/projektizaizmenu/editProjektizaizmenu`, projekatzaizmenu))
  }

}