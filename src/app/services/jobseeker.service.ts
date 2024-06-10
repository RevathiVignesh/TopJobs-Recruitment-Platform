import { Injectable } from '@angular/core';
import { jsdetails } from './jsdetails.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JobseekerService {
  baseUrl:string="https://localhost:7129/api/JobSeekerDetails";
  constructor(private httpClient:HttpClient) { }
  addjobseeker(Jsinfo:jsdetails):Observable<jsdetails>{
    return this.httpClient.post<jsdetails>(this.baseUrl,Jsinfo);
  }
}