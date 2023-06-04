import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Fajlovi } from '../models/fajlovi';
import { Field_names } from '../models/Field_names';
import { Project } from '../models/Project';
import { FajloviService } from '../services/fajlovi.service';
import { FileUploadService } from '../services/file-upload.service';
import { PoljeService } from '../services/polje.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent {

  constructor(private fileUploadService: FileUploadService, private router: Router, private projectService: ProjectService, private fajloviService: FajloviService, private poljeService: PoljeService) {}

  ngOnInit(): void {
    this.projekat_za_unos = JSON.parse("" + localStorage.getItem("projekat_za_unos",)) 
    console.log(this.projekat_za_unos)
    this.poljeService.getAllPolje().then((resp)=>{
      this.polja = JSON.parse(JSON.stringify(resp))
    })
  }

  polja: Field_names[] = []
  polje1: string = ""
  polje2: string = ""
  polje3: string = ""
  polje4: string = ""
  polje5: string = ""
  polje6: string = ""
  polje7: string = ""
  polje8: string = ""
  polje9: string = ""
  polje10: string = ""
  polje11: string = ""
  polje12: string = ""
  
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

  idProjekta!: number;
  opisProjekta1: string = "" ;
  opisProjekta2: string = "" ;
  budzetProjekta: string = "";
  gantogramProjekta: string = "";
  prezentacijaProjekta: string = "";
  izjaveProjekta: string = "";
  biografijaProjekta: string = "";
  etickeSaglasnostiProjekta: string = "";
  uticajProjekta: string = "";
  pismaPodrske: string = "";
  biznisPlanProjekta: string = "";
  dodatnaDokumentacija: string = "";
  naziv: string = "";

  showGoBack: boolean = false 
  

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
    for (let i = 0; i < allFileNames.length; i++) {
      if (allFileNames[i].length == 0) {
        alert(`Molimo izaberite sve neophodne datoteke`);
        return}
    }
    console.log(files1[0].name)  // to je ima fajla 1

    // UPIS POLJA SA IMENIMA U BAZU
    console.log(this.projekat_za_unos.nazivProjekta)
    let fajl = new Fajlovi()
    fajl.idProjekta = 1
    fajl.naziv = this.projekat_za_unos.nazivProjekta
    fajl.opisProjekta1 = files1[0].name
    fajl.opisProjekta2 = files2[0].name
    fajl.budzetProjekta = files3[0].name
    fajl.gantogramProjekta  = files4[0].name
    fajl.prezentacijaProjekta = files5[0].name
    fajl.izjaveProjekta = files6[0].name
    fajl.biografijaProjekta = files7[0].name
    fajl.etickeSaglasnostiProjekta = files8[0].name
    fajl.uticajProjekta = files9[0].name
    fajl.pismaPodrske = files10[0].name
    fajl.biznisPlanProjekta = files11[0].name
    fajl.dodatnaDokumentacija = files12[0].name
    this.fajloviService.insertFiles(fajl).then((resp) =>{
      alert("Uspesno upisano u bazu")
    })
      .catch(()=>{
        alert("Greska - nije upisano u bazu")
    })
    
    this.showGoBack = true

    this.fileUploadService.uploadFiles(allFiles).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    alert("Uspesno predate datoteke");

    // treba da promeni polje snimanjeProjekta u tabeli projekat na Predat
    // tu funkciju poziva iz filesController-a
    // da sakrije tri dugmeta i prikaze go back dugme
     
     

  }


  save(){
    // treba da insertuje i drugu stranu sta je uneto 
    // treba da ostavi polje snimanjeProjekta na na Snimljen

    // treba da uploaduje fajlove oje smo izabrali
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
    
    // UPIS POLJA SA IMENIMA U BAZU
    let fajl = new Fajlovi()
    fajl.naziv = this.projekat_za_unos.nazivProjekta
    fajl.opisProjekta1 = files1[0].name
    fajl.opisProjekta2 = files2[0].name
    fajl.budzetProjekta = files3[0].name
    fajl.gantogramProjekta = files4[0].name
    fajl.prezentacijaProjekta = files5[0].name
    fajl.izjaveProjekta = files6[0].name
    fajl.biografijaProjekta = files7[0].name
    fajl.etickeSaglasnostiProjekta = files8[0].name
    fajl.uticajProjekta = files9[0].name
    fajl.pismaPodrske = files10[0].name
    fajl.biznisPlanProjekta = files11[0].name
    fajl.dodatnaDokumentacija = files12[0].name
    this.fajloviService.insertFiles(fajl).then((resp) =>{
      alert("Uspesno upisano u bazu")
  })
  .catch(()=>{
      alert("Greska - nije upisano u bazu")
  })
    console.log(this.projekat_za_unos.nazivProjekta)
    this.fileUploadService.uploadFiles(allFiles).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    alert("Uspesno snimljene datoteke koje ste uneli");

    // treba da promeni polje snimanjeProjekta u tabeli projekat na Predat
    // tu funkciju poziva iz filesController-a
    // da sakrije tri dugmeta i prikaze go back dugme
     
     this.showGoBack = true

 }


  reset() {
    //  treba da izbrise iz tabele unetu prvu stranu
    //  poruka
    //  prikazi dugmice
    this.projekat_za_unos = JSON.parse("" + localStorage.getItem("projekat_za_unos",))
    console.log(this.projekat_za_unos.nazivProjekta)
      this.projectService.deleteProjectFirstPage(this.projekat_za_unos.nazivProjekta).then((resp) =>{
        alert("Uspesno obrisana sva polja koja ste uneli za ovaj projekat")
      })
    //alert("Uspesno obrisana sva polja koja ste uneli za ovaj projekat");
    this.showGoBack = true

  }


  goBack(){
    this.router.navigate(["/user"]);
  }


}