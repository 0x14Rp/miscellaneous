import {createAction, props} from '@ngrx/store';

export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');
export const multiplicar = createAction(
  '[Contador] multiplicar',
  props<{numero:number}>()

);
export const dividir = createAction(
  '[Contador] dividir',
  props<{numero:number}>()

);
