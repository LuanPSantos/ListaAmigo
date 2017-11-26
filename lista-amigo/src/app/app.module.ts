import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.router';

import { AppComponent } from './app.component';
import { ListagemModule } from './listagem/listagem.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    ListagemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
