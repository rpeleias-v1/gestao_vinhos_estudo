import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AutenticacaoService} from '../../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dadosLogin: any = {};
  carregando:boolean = false;
  erro = '';

  constructor(private router: Router, private autenticacaoService: AutenticacaoService) { }

  ngOnInit() {
    this.autenticacaoService.logout();
  }

  logar() {
    this.carregando = true;
    this.autenticacaoService.login(this.dadosLogin.login, this.dadosLogin.senha)
      .then(sucesso => {
        if(sucesso) {
          this.router.navigate(['/vinhos']);          
        } else {
          this.erro = 'Usuário ou senha inválidos';
          this.carregando = false;
        }
      })
  }

}
