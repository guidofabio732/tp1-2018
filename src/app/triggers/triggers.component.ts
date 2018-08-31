import { Component, OnInit } from '@angular/core';
import {TriggersService} from '../triggers.service';

@Component({
  selector: 'app-triggers',
  templateUrl: './triggers.component.html',
  styleUrls: ['./triggers.component.css']
})
export class TriggersComponent implements OnInit {

  constructor(private triggersService : TriggersService) { }

  ngOnInit() {
    //this.addTrigger();
  }

  triggers: any[];
  trigger : any;
  newTrigger : any;

  addTrigger(): void {
    this.triggersService.addTrigger(this.newTrigger)
      .subscribe(trigger => this.triggers.push(trigger));
  }



}
