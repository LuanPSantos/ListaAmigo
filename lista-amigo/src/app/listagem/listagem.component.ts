import { Component, OnInit } from '@angular/core';
import { AmigoService } from '../services/amigo.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// tslint:disable-next-line:angular-whitespace
import { Amigo } from './Amigo';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { CarregaAmigos, ExcluirAmigo } from '../app.actions';
import { selectTodosAmigos } from '../app.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
  providers: [AmigoService]
})
export class ListagemComponent implements OnInit {

  amigos$: Observable<Amigo[]>;
  lastOption = null;

  constructor(
    private router: Router,
    private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new CarregaAmigos());
    this.amigos$ = this.store.pipe(
      select(selectTodosAmigos)
    );
  }

  toggle(opcoes) {
    opcoes.hidden = !opcoes.hidden;

    if (this.lastOption && this.lastOption !== opcoes) {
      this.lastOption.hidden = true;
    }

    this.lastOption = opcoes;
  }

  editar(amigo: Amigo, opcoes) {
    opcoes.hidden = true;

    this.router.navigate(['/atualizar'], { queryParams: { id: amigo.id } });
  }

  excluir(amigo: Amigo, opcoes) {
    opcoes.hidden = true;

    this.store.dispatch(new ExcluirAmigo({ amigoId: amigo.id }));
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }
}
