import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Headers, Response } from '@angular/http';
import { Vinho } from '../models/vinho';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VinhosService {

  vinhos: Array<Vinho>;

  private apiUrl = '/vinhos';

  constructor(private http: Http) {    
   }

  getAll(): Promise<Vinho[]> {
    return this.http.get(this.apiUrl, this.prepararHeader())
      .toPromise()
      .then(data => data.json() as Vinho[])
      .catch(this.handleError);    
  } 

  get(id: number): Promise<Vinho[]> {
    return this.http.get(this.apiUrl + `/${id}`, this.prepararHeader())
      .toPromise()
      .then(data => data.json() as Vinho)
      .catch(this.handleError);
  } 

  post(vinho: Vinho): Promise<any> {
    return this.http.post(this.apiUrl, JSON.stringify(vinho), this.prepararHeader())
      .toPromise()
      .then(data => data.json())
      .catch(this.handleError);
  }

  put(id:number, vinho: Vinho):Promise<Response> {
    return this.http.put(this.apiUrl + `/${id}`, vinho, this.prepararHeader())
      .toPromise()
      .then(data => data.json())
      .catch(this.handleError);
  }

  delete(id: number): Promise<any> {
    return this.http.delete(this.apiUrl + `/${id}`, this.prepararHeader())
      .toPromise()
      .then(data => data.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Ocorrey um erro', error);
    return Promise.reject(error.message || error);
  }

  private prepararHeader(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let requestOptions = new RequestOptions({ headers: headers });
    return requestOptions;
  }

}
