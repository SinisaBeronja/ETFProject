import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  constructor(private uploadService: FileUploadService) { }

  file: File | null = null;

  ngOnInit(): void {
  }

  onFilechange(event: any) {
    this.file = event.target.files[0]
  }
  
  upload() {
    if (this.file) {
      this.uploadService.uploadfile(this.file).subscribe(resp => {
        alert("Uploaded")
      })
    } else {
      alert("Please select a file first")
    }
  }

}