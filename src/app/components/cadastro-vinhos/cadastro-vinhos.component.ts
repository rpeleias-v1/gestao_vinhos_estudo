import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VinhosService} from '../../services/vinhos.service';
import { NotificacaoService } from '../../services/notificacao.service';

import { Vinho } from '../../models/vinho';
import { Notificacao } from '../../models/notificacao';
 
@Component({
  selector: 'cadastro-vinhos',
  templateUrl: './cadastro-vinhos.component.html',
  styleUrls: ['./cadastro-vinhos.component.css']
})
export class CadastroVinhosComponent implements OnInit {

  vinho: Vinho;

  uvas: string[];
  classificacoes: string[];

  constructor(
    private router:Router, 
    private activatedRoute:ActivatedRoute, 
    private vinhosService: VinhosService, 
    private notificacaoService: NotificacaoService
    ) { }

  ngOnInit() {
    this.inicializarValoresCadastro();
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params['id'];
      if(id) {
        this.carregaEdicao(id);
      }
    })
  }

  private carregaEdicao(id:number): void {
    this.vinhosService.get(id)
      .then(vinho => this.vinho = vinho)
      .catch(error => console.log(error));
  }

  private salvar(): void{
    if (this.vinho.id) {
      this.atualizar()
    } else {
      this.criar();
    }
  }

  private atualizar(): void {
    this.vinhosService.put(this.vinho.id, this.vinho)
      .then(response => {
        this.notificacaoService.adicionar(new Notificacao('Vinho atualizado com sucesso!', 'alert-success'));        
        console.log(response.status);
        this.router.navigate(['/vinhos']);
      })
      .catch(error => {
        this.notificacaoService.adicionar(new Notificacao('Erro ao atualizar o vinho!', 'alert-danger'));         
        console.log(error);
      })
  }

  private criar(): void {
    this.vinhosService.post(this.vinho)
      .then(response => {        
        alert("Vinho cadastrado com sucesso");
        console.log(response.status);
        this.router.navigate(['/vinhos']);
      })
      .catch(error => {
        alert("Erro ao salvar o vinho");
        console.log(error);
      })
  }

  private inicializarValoresCadastro(): void {
    this.vinho = new Vinho();
    this.uvas = ['Cabernet Sauvignon', 'Merlot', 'Carmenére', 'Syrah'];
    this.classificacoes = ['Tinto', 'Branco', 'Verde'];
  }

  retornar(event:any): void {
    event.preventDefault();
    this.router.navigate(['/vinhos']);
  }
}
