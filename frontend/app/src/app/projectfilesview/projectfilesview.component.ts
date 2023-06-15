import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Fajlovi } from '../models/fajlovi';
import { Field_names } from '../models/Field_names';
import { Institution } from '../models/Institution';
import { Project } from '../models/Project';
import { FajloviService } from '../services/fajlovi.service';
import { InstitutionService } from '../services/institution.service';
import { PoljeService } from '../services/polje.service';

@Component({
  selector: 'app-projectfilesview',
  templateUrl: './projectfilesview.component.html',
  styleUrls: ['./projectfilesview.component.css']
})
export class ProjectfilesviewComponent implements OnInit {

  

  constructor(private sanitizer: DomSanitizer, private router: Router, private poljeService: PoljeService, private institutionService: InstitutionService, private fajloviService: FajloviService) { }

  ngOnInit() {
    //this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.project = JSON.parse("" + localStorage.getItem("project")) 
    this.poljeService.getAllPolje().then((resp)=>{
      this.polja = JSON.parse(JSON.stringify(resp))
    })
    console.log(this.polja)
    this.institutionService.getAllInstitution().then((resp)=>{
      this.institution = JSON.parse(JSON.stringify(resp))
      console.log(this.institution)
    })
    this.fajloviService.getFilesProject(this.project.nazivProjekta).then((resp)=>{
      this.fajlovi = JSON.parse(JSON.stringify(resp))
      console.log(this.project.nazivProjekta)
      console.log(this.fajlovi)
    })
    
  }

  project: Project = new Project()
  polja: Field_names[] = []
  institution: Institution[] = []
  fajlovi: Fajlovi[] = []
  lokacijaFajlova: string = "../../../../../backend/uploads/"
  location : string = "assets/"
  link1: string = ""


  //pdfFilePath: String = "../../../../../backend/uploads/opis1.pdf"


  downloadFile() {
    const filePath = '/../../../../backend/uploads/opis1.pdf'; // Putanja do fajla na vašem lokalnom disku
    const url = this.sanitizer.bypassSecurityTrustUrl(filePath);
    window.open(url.toString());
  }
  

  downloadFile2() {
    const content = 'This is the content of the file.'; // Replace with the desired file content
    const filename = 'example.txt'; // Replace with the desired file name
    const blob = new Blob([content], { type: 'text/plain' });
  
    //if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      // For IE browser
      //window.navigator.msSaveOrOpenBlob(blob, filename);
    //} else {
      // For other browsers
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = "../../../../../backend/uploads/opis1.pdf";
      anchor.download = "opis1.pdf"
      anchor.click();
      window.URL.revokeObjectURL(url);
  }
  
  
  
  goBack(){
    this.router.navigate(["/projectstatus"])
  }



}
