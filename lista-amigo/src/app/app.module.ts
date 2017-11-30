import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.router';

import { AppComponent } from './app.component';
import { ListagemModule } from './listagem/listagem.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { AtualizarModule } from './atualizar/atualizar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    ListagemModule,
    HttpModule,
    CadastroModule,
    AtualizarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
