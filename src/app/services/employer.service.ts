import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { empdetails } from './empdetails.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  baseUrl:string="https://localhost:7129/api/Employerdetails";
  empidUrl:string="https://localhost:7129/api/Employerdetails/email";
  constructor(private httpClient:HttpClient) { }
  addemployee(Jsinfo:empdetails):Observable<empdetails>{
    return this.httpClient.post<empdetails>(this.baseUrl,Jsinfo);
  }

  getemployee(): Observable<empdetails[]> {
    return this.httpClient.get<empdetails[]>(this.baseUrl);
  }

  // Validate user credentials
  validateUser(username: string, password: string): Observable<boolean> {
    return this.getemployee().pipe(
      map(users => {
        const user = users.find(u => u.employeeEmail === username && u.employeePassword === password);
        return !!user;
      })
    );
  }
  getemployerbyemail(email:string):Observable<empdetails>{
    return this.httpClient.get<empdetails>(this.empidUrl+'/'+email);
  } 

}
