import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Notificacao } from '../models/notificacao';

@Injectable()
export class NotificacaoService {

  private _notificacoes = new Subject<Notificacao>();

  public notificacaoAdicionada =this._notificacoes.asObservable();

  constructor() { }

  public adicionar(notificacao: Notificacao) {
    this._notificacoes.next(notificacao);
  }
}
