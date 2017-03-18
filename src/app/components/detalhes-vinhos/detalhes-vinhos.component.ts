import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { VinhosService } from '../../services/vinhos.service';

import { Vinho } from '../../models/vinho';

@Component({
  selector: 'app-detalhes-vinhos',
  templateUrl: './detalhes-vinhos.component.html',
  styleUrls: ['./detalhes-vinhos.component.css']
})
export class DetalhesVinhosComponent implements OnInit {

  vinho: Vinho;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private vinhosService: VinhosService) { }

  ngOnInit() {
    this.vinho = new Vinho();
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params['id'];
      if(id) {
        this.carregarVinho(id);
      }
    });
  }

  private carregarVinho(id: number) {
    this.vinhosService.get(id)
      .then((vinho: Vinho) => {
        this.vinho = vinho;
      })
      .catch((error: any) => console.error(error));
  }

  private retornar(event:any) {
    event.preventDefault();
    this.router.navigate(['/vinhos']);
  }

}
