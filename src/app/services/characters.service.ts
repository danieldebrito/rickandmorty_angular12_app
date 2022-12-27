import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/_base.service';
import { Character } from 'src/app/class/character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  
  API_URI = '';
  
  constructor(
    private http: HttpClient,
    private base: BaseService) {
    this.API_URI = this.base.getURL();
   }

  gets(): Observable<any> {
    return this.http.get(`${this.API_URI}/character`);
  }

  getByURL(url: string): Observable<any> {
    return this.http.get(`${url}`);
  }

  getsByPage(page: number): Observable<any> {
    return this.http.get(`${this.API_URI}/character?page=${page}`);
  }

  getsByName(text: string): Observable<any> {
    return this.http.get(`${this.API_URI}/character/?name=${text}`);
  }
}