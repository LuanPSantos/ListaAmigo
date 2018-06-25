import { Action } from '@ngrx/store';
import { Amigo } from './listagem/Amigo';

export enum AppActionTypes {
  CarregaAmigos = '[Listagem] Carrega Amigos',
  AmigosCarregados = '[Amigo API] Amigos carregados',
  ExcluirAmigo = '[Listagem] Excluir Amigo',
  AmigoExcluido = '[Amigo API] Amigo Excluido'
}

export class CarregaAmigos implements Action {
  readonly type = AppActionTypes.CarregaAmigos;
}

export class AmigosCarregados implements Action {
  readonly type = AppActionTypes.AmigosCarregados;

  constructor(public payload: { amigos: Amigo[] }) { }
}

export class ExcluirAmigo implements Action {
  readonly type = AppActionTypes.ExcluirAmigo;

  constructor(public payload: { amigoId: number }) { }
}

export class AmigoExcluido implements Action {
  readonly type = AppActionTypes.AmigoExcluido;
}

export type AppActions =
  CarregaAmigos |
  AmigosCarregados |
  ExcluirAmigo |
  AmigoExcluido;
