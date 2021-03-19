import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HijoComponent} from './contador/hijo/hijo.component';
import {NietoComponent} from './contador/nieto/nieto.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {contadorReducer} from "./contador/contador.reducer";

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    StoreModule.forRoot({contador: contadorReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
