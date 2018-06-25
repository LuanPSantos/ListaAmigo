import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AmigosState } from './reducers';

export const selectAppState = createFeatureSelector<AmigosState>('amigos');

export const selectTodosAmigos = createSelector(
  selectAppState,
  amigosState => {
      return amigosState.amigos;
  }
);
