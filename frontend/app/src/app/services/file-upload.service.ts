import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) {}

  uploadFiles(files: File[]) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('myFiles', files[i], files[i].name);
    }
    return this.http.post('http://localhost:5000/upload', formData);
  }

}
