import {createReducer, on} from "@ngrx/store";
import {decrementar, incrementar, multiplicar, reset} from "./contador.actions";

export const initialState = 20;

const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar,(state, {numero}) => state * numero),
  on(reset, state => initialState),
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
