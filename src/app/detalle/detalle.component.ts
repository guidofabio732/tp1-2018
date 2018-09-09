import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CiudadService} from '../ciudad.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ciudadService: CiudadService) { }
  
  ciudad: any;
  cent: number;

  ngOnInit() {
    this.getCiudadById();
  }

  getCiudadById(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.ciudadService.getCiudadById(id)
      .subscribe(ciudad => this.ciudad = ciudad);
  }

}
