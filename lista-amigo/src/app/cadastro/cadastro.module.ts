import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CabecalhoModule } from '../cabecalho/cabecalho.module';

@NgModule({
    declarations: [ CadastroComponent ],
    imports: [ CabecalhoModule],
    exports: [ CadastroComponent]
})
export class CadastroModule {}
