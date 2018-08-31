import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { TriggersComponent } from './triggers/triggers.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    TriggersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
