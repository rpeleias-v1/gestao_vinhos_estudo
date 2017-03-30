import { Component, OnInit, trigger, state, animate, transition, style } from '@angular/core';

import { Notificacao } from '../../models/notificacao';
import { NotificacaoService } from '../../services/notificacao.service';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [
    trigger('visibilidade', [
      state('shown', style({
        opacity: 1
      })),
      state('hidden', style({
        opacity: 0
      })),
      transition('shown => hidden', animate('.5s'))
    ])
  ]
})
export class NotificationComponent implements OnInit {

  visibilidade:string = 'hidden';
  notificacao: Notificacao;

  constructor(private notificacaoService: NotificacaoService) { 
    this.notificacaoService.notificacaoAdicionada.subscribe((notificacaoAdicionada: Notificacao) => {
        this.notificacao = notificacaoAdicionada;
        this.visibilidade = 'shown';
        setTimeout(() => { this.visibilidade = 'hidden' }, 2000);
    });
  }

  ngOnInit() {    
  }

  esconderVisibilidade(){
    this.visibilidade = this.visibilidade === 'shown' ? 'hidden' : 'shown';
  }

  getAlertType() {
    if (this.notificacao) {
      return `alert-${this.notificacao.tipo}`;
    }
    return 'alert-success';
  }
}
