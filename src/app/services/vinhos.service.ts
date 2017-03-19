import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Headers, Response } from '@angular/http';
import { Vinho } from '../models/vinho';

import { AutenticacaoService } from './autenticacao.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VinhosService {

  vinhos: Array<Vinho>;

  private apiUrl = '/vinhos';

  constructor(private http: Http, private autenticacaoService: AutenticacaoService) {    
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

  post(vinho: Vinho): Promise<Response> {
    return this.http.post(this.apiUrl, JSON.stringify(vinho), this.prepararHeader())
      .toPromise()
      .then(data => data)
      .catch(this.handleError);
  }

  put(id:number, vinho: Vinho):Promise<Response> {
    return this.http.put(this.apiUrl + `/${id}`, JSON.stringify(vinho), this.prepararHeader())
      .toPromise()
      .then(data => {
        return data;
      })
      .catch(this.handleError);
  }

  delete(id: number): Promise<Response> {
    return this.http.delete(this.apiUrl + `/${id}`, this.prepararHeader())
      .toPromise()
      .then(data => data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Ocorrey um erro', error);
    return Promise.reject(error.message || error);
  }

  private prepararHeader(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.autenticacaoService.token}`});
    let requestOptions = new RequestOptions({ headers: headers });
    return requestOptions;
  }

}
