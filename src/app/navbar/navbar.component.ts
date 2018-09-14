import { Component, OnInit } from '@angular/core';
import { CiudadService } from '../ciudad.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  value = '';
  constructor(private ciudadService : CiudadService) { }
  ciudad: any;
  cityName = '';
  searchCity(): void{
    this.ciudadService.getCiudad(this.cityName)
    .subscribe(ciudad => this.ciudad = ciudad)
  }
  onEnter(value: string) {
    this.value =  value;
    this.searchCity();
  }

}
