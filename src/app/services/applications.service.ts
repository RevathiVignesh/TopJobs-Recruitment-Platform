import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { application } from './application.model'; 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {
  baseUrl:string="https://localhost:7129/api/ApplicationForms";
  constructor(private httpClient:HttpClient) { 
    
  }
  addapplication(Jsinfo:application):Observable<application>{
    return this.httpClient.post<application>(this.baseUrl,Jsinfo);
  }

  getapplication(): Observable<application[]> {
    return this.httpClient.get<application[]>(this.baseUrl);
  }
}
