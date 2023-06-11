import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-projectfilesview',
  templateUrl: './projectfilesview.component.html',
  styleUrls: ['./projectfilesview.component.css']
})
export class ProjectfilesviewComponent implements OnInit {

  @Input()
  url: string = "https://www.google.com";
  urlSafe: SafeResourceUrl | undefined;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  
  pdfFilePath: String = "../../../../../backend/uploads/opis1.pdf"
  

}
