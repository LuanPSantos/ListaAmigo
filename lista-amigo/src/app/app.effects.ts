import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { AmigosCarregados, CarregaAmigos, AppActionTypes, ExcluirAmigo, AmigoExcluido } from './app.actions';
import { AmigoService } from './services/amigo.service';


@Injectable()
export class AppEffects {

  @Effect()
  carregaAmigos$ = this.actions$
  .pipe(
    ofType<CarregaAmigos>(AppActionTypes.CarregaAmigos),
    mergeMap(() => this.amigoService.buscarTodos()),
    map(amigos => new AmigosCarregados({amigos}))
  );

  @Effect()
  excluirAmigo$ = this.actions$
  .pipe(
    ofType<ExcluirAmigo>(AppActionTypes.ExcluirAmigo),
    mergeMap(action => this.amigoService.excluir(action.payload.amigoId)),
    map(() => new AmigoExcluido())
  );

  @Effect()
  amigoExcluido$ = this.actions$
  .pipe(
    ofType<AmigoExcluido>(AppActionTypes.AmigoExcluido),
    map(() => new CarregaAmigos())
  );

  constructor(private actions$: Actions, private amigoService: AmigoService) {}
}
