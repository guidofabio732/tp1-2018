import { Component, OnInit } from '@angular/core';
import {TriggersService} from '../triggers.service';

@Component({
  selector: 'app-triggers',
  templateUrl: './triggers.component.html',
  styleUrls: ['./triggers.component.css']
})
export class TriggersComponent implements OnInit {

  constructor(private triggersService : TriggersService) { }

  triggers: any[];
  trigger: any;
  newTrigger : any;
  model: any;

  ngOnInit() {
    //this.addTrigger();
    this.getTriggers();
    
    var fooTrigger = {
      time_period: {
        start: {
          expression: "after",
          amount: null
        },
        end:{
          expression: "after",
          amount: null
        }
      },
      conditions:[
        {
        name: "temp",
        expression: "$gt",
        amount: null
        }
      ],
      area: [
        {
          type: "Point",
          coordinates: [
            null,
            null
          ]
        }
      ]
    };

    this.model = fooTrigger;
  }

  onSubmit() {

    this.addTrigger();
  }

  addTrigger(): void {
    this.triggersService.addTrigger(this.model)
      .subscribe(trigger => this.triggers.push(trigger));
  }

  getTriggers(){
    this.triggersService.getTriggers()
      .subscribe(trigger => {this.triggers = trigger})
  }


  // nuevoTrigger(){
  //   this.model = new Trigger(4545, 0, 0, [0,5])
  // }

  
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

