import { Component, OnInit } from '@angular/core';
import {Ciudades} from '../ciudades';
import {ListaCiudadesService} from '../lista-ciudades.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})



export class BuscadorComponent {

  constructor(private listaCiudadesService : ListaCiudadesService) { }
  ciudad: Ciudades;
  cityName = '';
  searchCity(): void{
    this.listaCiudadesService.getCiudad(this.cityName)
    .subscribe(ciudad => this.ciudad.name = ciudad.name)
}

}
