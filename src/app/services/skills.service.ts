import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }
  getSkillById(id:number):Observable<Book>{
    return this.httpClient.get<Book>(this.bookidurl+'/'+id);
  } 
}
