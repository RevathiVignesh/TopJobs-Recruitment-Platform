import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { job } from './job.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  baseUrl:string="https://localhost:7129/api/Jobs";
  constructor(private httpClient:HttpClient) { }
  addjob(Jsinfo:job):Observable<job>{
    return this.httpClient.post<job>(this.baseUrl,Jsinfo);
  }


  getjob(): Observable<job[]> {
    return this.httpClient.get<job[]>(this.baseUrl);
  }
}
