import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Vinho } from '../models/vinho';

export function fakeBackend(backend: MockBackend, options: BaseRequestOptions) {
    
    backend.connections.subscribe((connection: MockConnection) => {
        let vinhos: Array<Vinho> = new Array<Vinho>();
        vinhos.push(new Vinho(1, 'Casillero del Diablo', 'Cabernet Sauvignon', 'Tinto', 2010, 'Concha y Toro', 'Chile'));
        vinhos.push(new Vinho(2, 'Salton Desejo', 'Carmenère', 'Tinto', 2008, 'Salton', 'Brasil'));    

        if(connection.request.url.endsWith('/vinhos') && connection.request.method === RequestMethod.Get) {
            connection.mockRespond(new Response(
                new ResponseOptions({status: 200, body: vinhos})
            ));
        }

        if(connection.request.url.match(/\/vinhos\/\d+$/) && connection.request.method === RequestMethod.Get) {
            let vinhoParts = connection.request.url.split('/');
            let id = parseInt(vinhoParts[vinhoParts.length - 1]);
            let vinhosEncontrados = vinhos.filter((vinho:Vinho) => {
                return vinho.id === id;
            });
            let vinho = vinhosEncontrados.length > 0 ? vinhosEncontrados[0] : null;
            connection.mockRespond(new Response(
                new ResponseOptions({status: 200, body: vinho})
            ));
        }
    }, 500)
    return new Http(backend, options);

}