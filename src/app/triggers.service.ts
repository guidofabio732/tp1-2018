import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriggersService {

  constructor(private http : HttpClient) { }

  url = 'https://api.openweathermap.org/data/3.0/triggers?appid=cc14f9a11b46364f749a8c5144bd67d6';
  
  addTrigger (trigger: any){
    return this.http.post(this.url, 

      {
         "time_period":{
            "start":{
               "expression":"after",
               "amount":132000000
            },
            "end":{
               "expression":"after",
               "amount":432000000
            }
         },
         "conditions":[
            {
               "name":"temp",
               "expression":"$gt",
               "amount":299
            }
         ],
         "area":[
            {
               "type":"Point",
               "coordinates":[
                  53,
                  37
               ]
            }
         ]
      }
      )
  }


}
