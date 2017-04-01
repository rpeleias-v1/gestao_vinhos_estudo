import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter',
  pure: false
})
export class TableFilterPipe implements PipeTransform {

  transform(objetos: any[], nome: string): any {
    if(nome !== undefined && nome !== '') {
      return objetos.filter((objeto:any) => {
        for(let property in objeto) {          
          if((objeto[property].toString()).indexOf(nome) !== -1) {                      
            return (objeto[property].toString()).indexOf(nome) !== -1;
          }      
        }        
      });
    } else {
      return objetos;
    }    
  }
}
