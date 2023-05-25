import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evaluation } from '../models/Evaluation';
import { Project } from '../models/Project';
import { User } from '../models/User';
import { EvaluationserviceService } from '../services/evaluationservice.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  constructor(private evaluationService: EvaluationserviceService, private router: Router, private projectService: ProjectService) { }

  evaluations: Evaluation[] = []
  user: User = new User()
  project: Project = new Project()
  projekat: Project = new Project()

  datumEvaluacije: string = ""
  sugestije: string = ""
  primedbe: string = ""
  zahtevi: string = ""
  statusProjekta: string = ""
  obrazlozenje: string = ""

  ngOnInit(): void {
    this.project = JSON.parse("" + localStorage.getItem("project")) 
    this.user = JSON.parse("" + localStorage.getItem("logged",)) 
    this.evaluationService.getAllValuationForOneProject(this.project.idProjekta).then((resp)=>{
      this.evaluations = JSON.parse(JSON.stringify(resp))
          //this.users.sort((a, b)=>{
          //return a.prezime - b.prezime
          //})
    })
  }
  //  dohvata sve projekte i prikazuje na user stranici, user.ime i user.prezime dohvata preko instance user iz local storage-a

  editEvaluation(evaluation: Evaluation){

  }

  deleteEvaluation(evaluation: Evaluation){

  }

  insertEvaluation(){
    let evaluation = new Evaluation();
    evaluation.datumEvaluacije = this.datumEvaluacije
    evaluation.sugestije = this.sugestije
    evaluation.primedbe = this.primedbe
    evaluation.zahtevi = this.zahtevi
    evaluation.statusProjekta = this.statusProjekta
    evaluation.obrazlozenje = this.obrazlozenje
    evaluation.idProjekta = this.project.idProjekta
    this.evaluationService.insertEvaluation(evaluation).then((resp) =>{
      alert("Dodata evaluacija")
   
      //  ovde treba da promeni polje status u tabeli projekat na vrednost this.statusProjekta
      this.projekat = JSON.parse("" + localStorage.getItem("project")) 
      console.log(this.project)
      console.log(this.projekat)
      console.log(this.project.status)
      console.log(evaluation.statusProjekta)
      this.project.status = evaluation.statusProjekta
      console.log(this.projekat.status)

      
      //this.projekat.status = "STATUS"
      this.projectService.editProjectStatus(this.project).then((resp) =>{
        alert("uspešna izmena statusa")
      }) 
      
      //  ukoliko je statusProjekta = "Dorada" treba da promeni polje snimanjeProjekta u tabeli projekat na snimljen (bilo je predat) tako da user moze da pristupi menjanju. 
      // ...
      //  ukoliko je odbijena ili prihvacena - salje obrazlozenje rukovodiocu
      // ...

    })
    .catch(()=>{
      alert("Greska - evaluacija nije dodata")
    })
  }

  goBack(){
		 if(this.user.lozinka == "admin246"){
      this.router.navigate(["projectstatus"])
    }
    else {
      this.router.navigate(["user"])
    }
	}

}
