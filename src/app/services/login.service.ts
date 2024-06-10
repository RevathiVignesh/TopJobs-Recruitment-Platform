import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { login } from './login.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl:string="https://localhost:7129/api/Logins";
  constructor(private httpClient:HttpClient) { }
  addlogin(Jsinfo:login):Observable<login>{
    return this.httpClient.post<login>(this.baseUrl,Jsinfo);
  }
  getLogins(): Observable<login[]> {
    return this.httpClient.get<login[]>(this.baseUrl);
  }

  // Validate user credentials
  validateUser(username: string, password: string): Observable<boolean> {
    return this.getLogins().pipe(
      map(users => {
        const user = users.find(u => u.emailid === username && u.password === password);
        return !!user;
      })
    );
  }
}


