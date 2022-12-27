import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/_base.service';
import { Episode } from 'src/app/class/episode';


@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  
    API_URI = '';
  
    constructor(
      private http: HttpClient,
      private base: BaseService) {
      this.API_URI = this.base.getURL();
     }
  
    gets(): Observable<any> {
      return this.http.get(`${this.API_URI}/episode`);
    }
  
    getById(id: string): Observable<any> {
      return this.http.get(`${this.API_URI}/episode/${id}`);
    }

    getByURL(url: string): Observable<any> {
      return this.http.get(`${url}`);
    }
  
    delete(id: string) {
      return this.http.delete(`${this.API_URI}/episode/${id}`);
    }
  
    save(element: Episode) {
      return this.http.post(`${this.API_URI}/episode`, element);
    }
  
    update(id: string|number, updated: Episode): Observable<any> {
      return this.http.post(`${this.API_URI}/episode`, updated);
    }
  }