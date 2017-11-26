import { NgModule } from '@angular/core';
import { ListagemComponent } from './listagem.component';
import { CabecalhoModule } from '../cabecalho/cabecalho.module';

@NgModule({
    declarations: [ListagemComponent],
    imports: [
        CabecalhoModule
    ],
    exports: [
        CabecalhoModule
    ]
})
export class ListagemModule { }
