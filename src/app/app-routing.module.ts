import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { VinhosComponent } from './components/vinhos/vinhos.component';
import { DetalhesVinhosComponent } from './components/detalhes-vinhos/detalhes-vinhos.component';
import { CadastroVinhosComponent } from './components/cadastro-vinhos/cadastro-vinhos.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guard/auth.guard';

export const routes:Routes = [
    {
        path: '',
        redirectTo: '/vinhos',
        pathMatch: 'full'
    },
    {
        path: 'vinhos',
        component: VinhosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'detalhes-vinhos/:id',
        component: DetalhesVinhosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'cadastro-vinhos',
        component: CadastroVinhosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'cadastro-vinhos/:id',
        component: CadastroVinhosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {path: '**', redirectTo: '/vinhos'}
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}