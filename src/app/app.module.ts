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
import { fakeBackend } from './fake-backend/fake-backend';
import { CadastroVinhosComponent } from './components/cadastro-vinhos/cadastro-vinhos.component';

@NgModule({
  declarations: [
    AppComponent,
    VinhosComponent,
    DetalhesVinhosComponent,
    CadastroVinhosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    VinhosService,
    { provide: Http, useFactory: fakeBackend, deps: [MockBackend, BaseRequestOptions]},
    MockBackend,
    BaseRequestOptions
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
