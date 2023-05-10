import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  public uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('files', file),
    alert("uploaded");
    return this.httpClient.post('http://localhost:5000/upload', formParams)
  }

}
