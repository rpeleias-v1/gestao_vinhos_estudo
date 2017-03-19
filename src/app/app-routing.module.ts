import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { VinhosComponent } from './components/vinhos/vinhos.component';
import { DetalhesVinhosComponent } from './components/detalhes-vinhos/detalhes-vinhos.component';
import { CadastroVinhosComponent } from './components/cadastro-vinhos/cadastro-vinhos.component';

export const routes:Routes = [
    {
        path: '',
        redirectTo: '/vinhos',
        pathMatch: 'full'
    },
    {
        path: 'vinhos',
        component: VinhosComponent
    },
    {
        path: 'detalhes-vinhos/:id',
        component: DetalhesVinhosComponent
    },
    {
        path: 'cadastro-vinhos',
        component: CadastroVinhosComponent
    },
    {
        path: 'cadastro-vinhos/:id',
        component: CadastroVinhosComponent
    },
    {path: '**', redirectTo: '/vinhos'}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}