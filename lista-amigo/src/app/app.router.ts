import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
    { path: 'listagem', component: ListagemComponent },
    { path: '**', component: ListagemComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
