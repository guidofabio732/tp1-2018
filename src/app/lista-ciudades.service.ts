import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaCiudadesService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'https://api.openweathermap.org/data/2.5/box/city?bbox=-62,-31,-59,-34,100&appid=cc14f9a11b46364f749a8c5144bd67d6'
  
  getRegion(): Observable<any>{
    return this.http.get(this.baseUrl)
  }
}
