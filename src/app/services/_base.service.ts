import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public urlBase: string = '';

  constructor(public http: HttpClient) {
    this.urlBase = 'https://rickandmortyapi.com/api';
  }

  public getURL(){
    return this.urlBase;
  }
}
