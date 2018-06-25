import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Amigo } from '../listagem/Amigo';
import { AppActions, AppActionTypes } from '../app.actions';

// tslint:disable-next-line:interface-over-type-literal
export type AmigosState = {
  amigos: Amigo[]
};

export interface AppState {
  amigos: AmigosState;
}

const initialState: AmigosState = {
  amigos: []
};

function amigoReducer(state: AmigosState = initialState, action: AppActions): AmigosState {
  switch (action.type) {
    case AppActionTypes.AmigosCarregados: {
      return {
        amigos: action.payload.amigos
      };
    }
    default: {
      return state;
    }
  }
}

export const reducers: ActionReducerMap<AppState> = {
  amigos: amigoReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
