import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VinhosComponent } from './components/vinhos/vinhos.component';
import { DetalhesVinhosComponent } from './components/detalhes-vinhos/detalhes-vinhos.component';

import { VinhosService} from './services/vinhos.service';
import { AutenticacaoService} from './services/autenticacao.service';
import { NotificacaoService} from './services/notificacao.service';

import { AuthGuard } from './guard/auth.guard';
import { fakeBackend } from './fake-backend/fake-backend';
import { CadastroVinhosComponent } from './components/cadastro-vinhos/cadastro-vinhos.component';
import { LoginComponent } from './components/login/login.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    VinhosComponent,
    DetalhesVinhosComponent,
    CadastroVinhosComponent,
    LoginComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    VinhosService,
    AutenticacaoService,
    NotificacaoService,
    AuthGuard,
    { provide: Http, useFactory: fakeBackend, deps: [MockBackend, BaseRequestOptions]},
    MockBackend,
    BaseRequestOptions
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
