import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";
import {multiplicar,dividir} from "../contador.actions";

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number

  constructor(private store:Store<AppState>) {
  }

  ngOnInit(): void {

    this.store.select('contador').subscribe(contador => this.contador = contador);

  }

  multiplicar() {
    this.contador *= 2;
    this.store.dispatch(multiplicar({numero:3}))
  }

  dividir() {
    this.contador /= 2;
    this.store.dispatch(dividir({numero:3}))
  }

  resetNieto(nuevoContador: number) {

    this.contador = nuevoContador;

  }
}
