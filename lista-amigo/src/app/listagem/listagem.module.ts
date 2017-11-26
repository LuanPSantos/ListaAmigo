import { NgModule } from '@angular/core';
import { ListagemComponent } from './listagem.component';
import { CabecalhoModule } from '../cabecalho/cabecalho.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ListagemComponent],
    imports: [
        CabecalhoModule,
        CommonModule
    ],
    exports: [
        CabecalhoModule
    ]
})
export class ListagemModule { }
