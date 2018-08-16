import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ciudades} from '../ciudades';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRegion();
  }

  ciudad: Ciudades;
  ciudades: Ciudades[];

  getRegion(): void {
    this.http.get<any>('https://api.openweathermap.org/data/2.5/box/city?bbox=-62,-31,-58,-33,100&appid=cc14f9a11b46364f749a8c5144bd67d6')
      .subscribe(ciudades => {this.ciudades = ciudades.list});
  }


  

}
