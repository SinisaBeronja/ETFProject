import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Evaluation } from '../models/Evaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationserviceService {

  constructor(private http: HttpClient) { }

  backend = 'http://localhost:5000'

  getAllValuationForOneProjekt(idProjekta: number){
    return firstValueFrom(this.http.get(`${this.backend}/evaluation/getAllEvaluationForOneProject/${idProjekta}`))
  }
  
  insertEvaluation(evaluation: Evaluation){
    return firstValueFrom(this.http.post(`${this.backend}/evaluation/insertEvaluation`, evaluation)) 
  }

  editEvaluation(evaluation: Evaluation){
    return firstValueFrom(this.http.put(`${this.backend}/evaluation/editEvaluation`, evaluation))
  }

  deleteEvaluation(evaluation: Evaluation){
    return firstValueFrom(this.http.delete(`${this.backend}/evaluation/deleteEvaluation/${evaluation.idEvaluacije}`))
  }

 
}
