import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http: HttpClient) { }

  private url = 'http://api.openweathermap.org/data/2.5/weather?id=2172797';

  getCiudadById() {
    return this.http.get(this.url);
  }
}
