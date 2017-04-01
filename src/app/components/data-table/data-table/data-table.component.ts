import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() tituloBusca: string = "Buscar elemento";
  @Input() titulosTabela: any = {};
  @Input() linhas: any[] = [];
  
  @Output() visualizar: EventEmitter<any> = new EventEmitter();
  @Output() editar: EventEmitter<any> = new EventEmitter();
  @Output() excluir: EventEmitter<any> = new EventEmitter();  

  campoBusca: string;
  linhaSelecionada: any;

  propriedades: string[] = [];

  constructor() { }

  ngOnInit() {     
    this.propriedades = Object.keys(this.titulosTabela); 
  }

  editarLinha(linha: any) {
    this.editar.next(linha);
  }

  visualizarLinha(linha: any) {
    this.visualizar.next(linha);
  }

  excluirLinha(linha: any) {
    this.excluir.next(linha);
  }

  obterPropriedades(linha: any) {
    return Object.keys(linha);
  }

  selecionarLinha(linha: any) {
    this.linhaSelecionada = linha;
  }
}
