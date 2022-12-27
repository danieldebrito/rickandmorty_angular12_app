import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/_base.service';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  API_URI = '';

  constructor(
    private http: HttpClient,
    private base: BaseService) {
    this.API_URI = this.base.getURL();
  }

  gets(): Observable<any> {
    return this.http.get(`${this.API_URI}/location`);
  }

  getByNameTypeDimemsion(name: string, type: string, dimension: string): Observable<any> {
    return this.http.get(`${this.API_URI}/location/?name=${name}&type=${type}&dimension=${dimension}`);
  }

  getByURL(url: string): Observable<any> {
    return this.http.get(`${url}`);
  }

  getsByPage(page: number): Observable<any> {
    return this.http.get(`${this.API_URI}/location?page=${page}`);
  }
}