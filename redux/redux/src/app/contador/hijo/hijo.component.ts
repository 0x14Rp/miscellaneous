import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducers";

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
    //this.cambioContador.emit(this.contador);
  }

  dividir() {
    this.contador /= 2;
   // this.cambioContador.emit(this.contador);
  }

  /*resetNieto(nuevoContador: number) {

    this.contador = nuevoContador;
    this.cambioContador.emit(this.contador);
  }*/
}
