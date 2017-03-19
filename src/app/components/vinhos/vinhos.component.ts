import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vinho } from '../../models/vinho';

import { VinhosService} from '../../services/vinhos.service';

@Component({
  selector: 'vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho>;

  constructor(private router: Router, private vinhosService: VinhosService) { }

  ngOnInit() {
    this.listar();
  }

  private listar(): void {
    this.vinhosService.getAll()
      .then(vinhos => {
        this.vinhos = vinhos
        console.log(vinhos);
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
        alert("Vinho excluído com sucesso");
        this.listar();
      })
      .catch(error => {
        alert("Erro ao excluir vinho");
        console.log(error);
      });
  }

}
