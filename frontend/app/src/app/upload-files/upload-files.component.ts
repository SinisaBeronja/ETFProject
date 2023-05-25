import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/Project';
import { FileUploadService } from '../services/file-upload.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent {

  constructor(private fileUploadService: FileUploadService, private router: Router, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projekat_za_unos = JSON.parse("" + localStorage.getItem("projekat_za_unos",)) 
    console.log(this.projekat_za_unos)
  }

  projekat_za_unos: Project = new Project()

  @ViewChild('files1') files1Input!: ElementRef;
  @ViewChild('files2') files2Input!: ElementRef;
  @ViewChild('files3') files3Input!: ElementRef;
  @ViewChild('files4') files4Input!: ElementRef;
  @ViewChild('files5') files5Input!: ElementRef;
  @ViewChild('files6') files6Input!: ElementRef;
  @ViewChild('files7') files7Input!: ElementRef;
  @ViewChild('files8') files8Input!: ElementRef;
  @ViewChild('files9') files9Input!: ElementRef;
  @ViewChild('files10') files10Input!: ElementRef;
  @ViewChild('files11') files11Input!: ElementRef;
  @ViewChild('files12') files12Input!: ElementRef;
  
  files1: File[] = [];
  files2: File[] = [];
  files3: File[] = [];
  files4: File[] = [];
  files5: File[] = [];
  files6: File[] = [];
  files7: File[] = [];
  files8: File[] = [];
  files9: File[] = [];
  files10: File[] = [];
  files11: File[] = [];
  files12: File[] = [];

  

  uploadFiles() {

    // treba da uploaduje sve fajlove
    const files1 = this.files1Input.nativeElement.files;
    const files2 = this.files2Input.nativeElement.files;
    const files3 = this.files3Input.nativeElement.files;
    const files4 = this.files4Input.nativeElement.files;
    const files5 = this.files5Input.nativeElement.files;
    const files6 = this.files6Input.nativeElement.files;
    const files7 = this.files7Input.nativeElement.files;
    const files8 = this.files8Input.nativeElement.files;
    const files9 = this.files9Input.nativeElement.files;
    const files10 = this.files10Input.nativeElement.files;
    const files11 = this.files11Input.nativeElement.files;
    const files12 = this.files12Input.nativeElement.files;
    const allFiles = [...files1, ...files2, ...files3, ...files4, ...files5, ...files6, ...files7, ...files8, ...files9, ...files10, ...files11, ...files12];
    const allFileNames = [files1, files2, files3, files4, files5, files6, files7, files8, files9, files10, files11, files12];
    //for (let i = 0; i < allFileNames.length; i++) {
     // if (allFileNames[i].length == 0) {
     //   alert(`Molimo izaberite sve neophodne datoteke`);
      //  return}
    //}
    this.fileUploadService.uploadFiles(allFiles).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    alert("Uspesno predate datoteke");

    // treba da promeni polje snimanjeProjekta u tabeli projekat na Predat
    
    this.projekat_za_unos.snimanjeProjekta = "Predat"
    console.log(this.projekat_za_unos)
    this.projectService.editProject(this.projekat_za_unos).then((resp) =>{
      alert("uspešna izmena")
    })

  }


  save(){
    // treba da insertuje i drugu stranu sta je uneto 
    // treba da ostavi polje snimanjeProjektana na Snimljen
 }


  reset() {
    //  treba da izbrise iz tabele unetu prvu stranu
    //  poruka
    //  vrati nazad na stranu user
    this.router.navigate(["/user"]);
  }

}