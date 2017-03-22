import { Component } from '@angular/core';

import { AutenticacaoService } from './services/autenticacao.service';
import { NotificacaoService } from './services/notificacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestão de Vinhos';

  constructor(private autenticacaoService: AutenticacaoService) { }
}
