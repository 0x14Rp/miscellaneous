import {Component, OnInit} from '@angular/core';
import {AppState} from "../../app.reducers";
import {Store} from "@ngrx/store";
import {reset} from "../contador.actions";

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  contador: number;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {

    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  reset() {
    this.store.dispatch(reset());
  }
}
