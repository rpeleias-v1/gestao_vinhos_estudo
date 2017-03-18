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
    this.vinhosService.getAll()
      .then(vinhos => this.vinhos = vinhos)
      .catch(error => console.error(error));
  }

  visualizar(vinho: Vinho) {
    this.router.navigate(['/detalhes-vinhos', vinho.id]);
  }

}
