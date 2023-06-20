import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private evaluationService: EvaluationserviceService, private router: Router, private projectService: ProjectService, private http: HttpClient) { }

  evaluations: Evaluation[] = []
  user: User = new User()
  project: Project= new Project() 
  projekat: Project = new Project()

  datumEvaluacije: string = ""
  sugestije: string = ""
  primedbe: string = ""
  zahtevi: string = ""
  statusProjekta: string = ""
  obrazlozenje: string = ""

  msgblank: boolean = true
  msg1: boolean = false
  msg2: boolean = false
  msg3: boolean = false
  msg4: boolean = false
  showbtnizmena = true

  ngOnInit(): void {
    this.project = JSON.parse("" + localStorage.getItem("project")) 
    console.log(this.project);
    
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
      //alert("Dodata evaluacija")
      this.msgblank = true
      this.msg1 = true
      this.msg2 = false
      this.msg3 = false
      this.msg4 = false
      this.showbtnizmena = false

   
      //  ovde treba da promeni polje status u tabeli projekat na vrednost this.statusProjekta
      //this.project = JSON.parse("" + localStorage.getItem("project")) 
      //  To radi pozivom iz evaluationController-a
     
      console.log(this.project.idProjekta)
      console.log(this.project)
      console.log(this.project.status)
      console.log(evaluation.statusProjekta)
      this.project.status = evaluation.statusProjekta
      console.log(this.project.status)

      
      
      
      //  ukoliko je statusProjekta = "Dorada" treba da promeni polje snimanjeProjekta u tabeli projekat na snimljen (bilo je predat) tako da user moze da pristupi menjanju. 
      // ...
      //  ukoliko je odbijena ili prihvacena - salje obrazlozenje rukovodiocu
      // ...

    })
    .catch(()=>{
      //alert("Greska - evaluacija nije dodata")
      this.msgblank = false
      this.msg1 = false
      this.msg2 = true
      this.msg3 = false
      this.msg4 = false
      this.showbtnizmena = true
    })
  }

  goBack(){
      this.router.navigate(["projectstatus"])
	}


  //email!: string;
  //
  //submitForm() {
  //  const formData = { email: this.email };
//
  //  this.http.post('http://localhost:5000/password-reset', formData).subscribe(
    //  () => {
      //  console.log('Password reset request sent successfully.');
        // Display success message to the user
  //    },
    //  (error) => {
      //  console.error('Error occurred during password reset:', error);
        //alert("Ne postoji korisnik sa tom mejl adresom")
 //       // Display error message to the user
   //   }
    //);
 // }

 onSubmit(contactForm: NgForm) {
  if (contactForm.valid) {
    const email = contactForm.value;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/asdlf7asdf',
      { name: email.name, replyto: email.email, message: email.messages },
      { 'headers': headers }).subscribe(
        response => {
          console.log(response);
        }
      );
  }
}

prihvacen() {
  const emailData = {
    email: this.project.mailRukovodioca,
    message: this.obrazlozenje
  };
  console.log(this.project.mailRukovodioca);
  this.http.post('http://localhost:5000/api/sendEmail', emailData).subscribe(
    () => {
      console.log('Email sent successfully');
      //alert("Komentar poslat na mail");
      this.msgblank = false
      this.msg1 = false
      this.msg2 = false
      this.msg3 = true
      this.msg4 = false
      this.showbtnizmena = false
    },
    (error) => {
      console.error('Error sending email:', error);
    }
  );

}


dorada() {
  const emailData = {
    email: this.project.mailRukovodioca,
    message: this.zahtevi
  };
  console.log(this.project.mailRukovodioca);
  this.http.post('http://localhost:5000/api/sendEmail', emailData).subscribe(
    () => {
      console.log('Email sent successfully');
      //alert("Komentar poslat na mail");
      this.msgblank = false
      this.msg1 = false
      this.msg2 = false
      this.msg3 = true
      this.msg4 = false
      this.showbtnizmena = false
    },
    (error) => {
      console.error('Error sending email:', error);
    }
  );

} 

odbijen() {
  const emailData = {
    email: this.project.mailRukovodioca,
    message: this.obrazlozenje
  };
  console.log(this.project.mailRukovodioca);
  this.http.post('http://localhost:5000/api/sendEmail', emailData).subscribe(
    () => {
      console.log('Email sent successfully');
      //alert("Komentar poslat na mail");
      this.msgblank = false
      this.msg1 = false
      this.msg2 = false
      this.msg3 = true
      this.msg4 = false
      this.showbtnizmena = false
    },
    (error) => {
      console.error('Error sending email:', error);
      this.msgblank = false
      this.msg1 = false
      this.msg2 = false
      this.msg3 = false
      this.msg4 = true
      this.showbtnizmena = false
    }
  );

}


};