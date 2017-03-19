import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AutenticacaoService {

  public token: string;

  constructor(private http: Http) { 
    let usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    this.token = usuarioLogado && usuarioLogado.token;
  }

  login(login: string, senha: string): Promise<boolean> {
    return this.http.post('/login', JSON.stringify({login: login, senha: senha}))
      .toPromise()
      .then((response: Response) => {
        let token = response.json() && response.json().token;
        let nomeUsuario = response.json() && response.json().nomeUsuario;
        if(token) {
          this.token = token;
          localStorage.setItem('usuarioLogado', JSON.stringify({login: login, token: token, nomeUsuario: nomeUsuario}));
          return true;
        } else {
          return false;
        }
      });
  }

  usuarioLogado(): boolean {
    return localStorage.getItem('usuarioLogado') !== null;
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('usuarioLogado');
  }

  getUsuarioLogado() {
    return JSON.parse(localStorage.getItem('usuarioLogado'));
  }

}
