import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ciudades} from '../ciudades';
import { ListaCiudadesService } from '../lista-ciudades.service'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private listaCiudadesService : ListaCiudadesService ) { }

  ngOnInit() {
    this.getRegion();
  }

  ciudad: Ciudades;
  ciudades: Ciudades[];

  getRegion(): void {
    this.listaCiudadesService.getRegion()
      .subscribe(ciudades => {this.ciudades = ciudades.list});
  }


  

}
