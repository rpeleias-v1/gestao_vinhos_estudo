import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { Vinho } from '../models/vinho';

export function fakeBackend(backend: MockBackend, options: BaseRequestOptions) {
    
    backend.connections.subscribe((connection: MockConnection) => {
        
        let vinhos = JSON.parse(localStorage.getItem('vinhos')) || localStorage.setItem('vinhos', JSON.stringify([]));;

        setTimeout(() => {
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

            if(connection.request.url.endsWith('/vinhos') && connection.request.method === RequestMethod.Post) {
                let novoVinho = JSON.parse(connection.request.getBody());
                let vinhoDuplicado = vinhos.filter((vinho:Vinho) => {
                    return vinho.nome === novoVinho.nome;
                }).length;

                if(vinhoDuplicado) {
                    return connection.mockError(new Error('Atenção! O vinho informado já está cadastrado no sistema'));
                }
                novoVinho.id = vinhos.length + 1;
                vinhos.push(novoVinho);
                localStorage.setItem('vinhos', JSON.stringify(vinhos));

                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 200})
                ));
            }

            if(connection.request.url.match(/\/vinhos\/\d+$/) && connection.request.method === RequestMethod.Delete){
                let vinhoParts = connection.request.url.split('/');
                let idVinho = parseInt(vinhoParts[vinhoParts.length - 1]);
                for(let i = 0; i < vinhos.length; i++) {
                    let vinho = vinhos[i];
                    if(vinho.id === idVinho) {
                        vinhos.splice(i, 1);
                        localStorage.setItem('vinhos', vinhos);
                        break;
                    }
                }
                connection.mockRespond(new Response(
                    new ResponseOptions({ status: 200 })
                ));
            }
        })          
    }, 500)
    return new Http(backend, options);

}