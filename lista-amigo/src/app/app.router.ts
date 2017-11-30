import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AtualizarComponent } from './atualizar/atualizar.component';

const routes: Routes = [
    { path: 'listagem', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'atualizar', component: AtualizarComponent },
    { path: '**', component: ListagemComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
