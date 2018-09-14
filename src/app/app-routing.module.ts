import { NgModule, Input, Injectable } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetalleComponent} from './detalle/detalle.component';
import { ListadoComponent } from './listado/listado.component';
import { TriggersComponent } from './triggers/triggers.component';


const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  {path: 'detalles/:id', component: DetalleComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'alertas', component: TriggersComponent}


]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
