import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { skills } from './skill.model';
@Injectable({
  providedIn: 'root'
})

export class SkillsService {
  baseUrl:string="https://localhost:7129/api/Skills";
  constructor(private httpClient:HttpClient) { }
  getSkills(): Observable<skills[]> {
    return this.httpClient.get<skills[]>(this.baseUrl);
  }

}
