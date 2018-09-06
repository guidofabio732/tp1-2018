import { Component, OnInit, Input } from '@angular/core';
import { Ciudades } from '../ciudades';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  // @Input() ciudad: Ciudades;
  
  id = 0;

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

  

}
