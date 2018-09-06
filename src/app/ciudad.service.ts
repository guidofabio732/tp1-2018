import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http: HttpClient) {}

  private url = 'https://api.openweathermap.org/data/2.5/weather';
  private key = 'cc14f9a11b46364f749a8c5144bd67d6';

  getCiudadById(id: number):Observable<any> {
    return this.http.get(this.url+'?id='+id+'&appid='+this.key+'&units=metric')
  }
}
