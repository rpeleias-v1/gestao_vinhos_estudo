import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { VinhosComponent } from './components/vinhos/vinhos.component';
import { DetalhesVinhosComponent } from './components/detalhes-vinhos/detalhes-vinhos.component';

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
    {path: '**', redirectTo: '/vinhos'}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}