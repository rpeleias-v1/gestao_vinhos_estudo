import { Pipe, PipeTransform } from '@angular/core';

import { Vinho } from '../models/vinho';

@Pipe({
  name: 'tableFilter',
  pure: false
})
export class TableFilterPipe implements PipeTransform {

  transform(vinhos: Vinho[], nome: string): any {
    if(nome !== undefined && nome !== '') {
      return vinhos.filter((vinho:Vinho) => {
        return vinho.nome.indexOf(nome) !== -1;
      });
    } else {
      return vinhos;
    }
    
  }

}
