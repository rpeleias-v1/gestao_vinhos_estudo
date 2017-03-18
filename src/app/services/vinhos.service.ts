import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Vinho } from '../models/vinho';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VinhosService {

  vinhos: Array<Vinho>;

  private apiUrl = '/vinhos';

  constructor(private http: Http) {    
   }

  getAll(): Promise<Vinho[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(data => data.json() as Vinho[])
      .catch(this.handleError);
    
  } 

  get(id: number): Promise<Vinho[]> {
    return this.http.get(this.apiUrl + `/${id}`)
      .toPromise()
      .then(data => data.json() as Vinho)
      .catch(this.handleError);
    
  } 

  private handleError(error: any): Promise<any> {
    console.error('Ocorrey um erro', error);
    return Promise.reject(error.message || error);
  }

}
