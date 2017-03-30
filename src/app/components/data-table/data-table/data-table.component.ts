import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() propriedades: {} = {};
  @Input() linhas: any[] = [];
  
  campoBusca: string;

  chaves: string[];

  @Output() visualizar: EventEmitter<any> = new EventEmitter();
  @Output() editar: EventEmitter<any> = new EventEmitter();
  @Output() remover: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.chaves = Object.keys(this.propriedades);
  }

  editarLinha(linha: any) {
    this.editar.next(linha);
  }

  visualizarLinha(linha: any) {
    this.visualizar.next(linha);
  }

  removerLinha(linha: any) {
    this.remover.next(linha);
  }
}
