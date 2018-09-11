import { Component, OnInit } from '@angular/core';
import {ListaCiudadesService} from '../lista-ciudades.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private listaCiudadesService : ListaCiudadesService) { }
  ciudad: any;
  cityName = '';
  searchCity(): void{
    this.listaCiudadesService.getCiudad(this.cityName)
    .subscribe(ciudad => this.ciudad = ciudad)
  }

}
