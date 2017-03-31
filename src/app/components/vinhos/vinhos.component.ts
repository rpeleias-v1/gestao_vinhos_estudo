import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vinho } from '../../models/vinho';
import { Notificacao } from '../../models/notificacao';

import { VinhosService} from '../../services/vinhos.service';
import { NotificacaoService } from '../../services/notificacao.service';

@Component({
  selector: 'vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho> = new Array<Vinho>();

  vinhoSelecionado: Vinho;

  buscaVinho: string;

  constructor(private router: Router, private vinhosService: VinhosService, private notificacaoService: NotificacaoService) { }

  ngOnInit() {
    this.listar();
  }

  private listar(): void {
    this.vinhosService.getAll()
      .then(vinhos => {
        this.vinhos = vinhos        
      })
      .catch(error => console.error(error));
  }

  visualizar(vinho: Vinho) {
    this.router.navigate(['/detalhes-vinhos', vinho.id]);
  }

  editar(vinho: Vinho) {
    this.router.navigate(['/cadastro-vinhos', vinho.id]);
  }

  excluir(vinho:Vinho) {
    this.vinhosService.delete(vinho.id)
      .then(response => {
        this.notificacaoService.adicionar(new Notificacao(`Vinho excluído com sucesso!`, 'warning'));                
        this.listar();
      })
      .catch(error => {
        this.notificacaoService.adicionar(new Notificacao(`Erro ao excluir vinho`, 'danger'));                                
      });
  }

  selecionar(event:any) {
    this.vinhoSelecionado = event;
  }

}
