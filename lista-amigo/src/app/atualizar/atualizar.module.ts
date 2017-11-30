import { NgModule } from '@angular/core';
import { AtualizarComponent } from './atualizar.component';
import { CabecalhoModule } from '../cabecalho/cabecalho.module';

@NgModule({
    declarations: [AtualizarComponent],
    imports: [CabecalhoModule],
    exports: [AtualizarComponent]
})
export class AtualizarModule{

}
