import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectfilesview',
  templateUrl: './projectfilesview.component.html',
  styleUrls: ['./projectfilesview.component.css']
})
export class ProjectfilesviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  pdfFilePath: String = "./././././backend/uploads/opis1.pdf"
  
}
