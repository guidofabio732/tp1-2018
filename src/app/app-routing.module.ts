import { NgModule, Input, Injectable } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetalleComponent} from './detalle/detalle.component';
import { ListadoComponent } from './listado/listado.component';


const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  {path: 'detalles/:id', component: DetalleComponent},
  {path: 'listado', component: ListadoComponent},


]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
}
