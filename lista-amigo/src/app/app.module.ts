import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutes } from './app.router';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AtualizarComponent } from './atualizar/atualizar.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { AmigoService } from './services/amigo.service';


@NgModule({
  declarations: [
    AppComponent,
    AtualizarComponent,
    CabecalhoComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutes,
    HttpModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [AmigoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
