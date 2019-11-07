import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Plato } from '../plato';
import { RestauranteService} from '../Restaurante.service';
import { Restaurante } from '../Restaurante';

@Component({
  selector: 'app-restaurante-agregar-plato',
  templateUrl: './restaurante-agregar-plato.component.html',
  styleUrls: ['./restaurante-agregar-plato.component.css']
})
export class RestauranteAgregarPlatoComponent implements OnInit {

  constructor(
      private restauranteService: RestauranteService,
      private toastrService: ToastrService
  ) { }
  @Input() restaurante: Restaurante;

  public isCollapsed = true;

  plato: Plato;
  
  @Output() updatePlatos = new EventEmitter();
  crearPlato(platoForm: NgForm):Plato
  {
     this.plato.restaurante = this.restaurante;
     this.restauranteService.createPlato(this.restaurante.id, this.plato).subscribe(() => 
     {
         platoForm.reset();
         this.updatePlatos.emit();
         this.toastrService.success("Se registro el plato con exito");
     }, err =>
     {
        this.toastrService.error(err,'Error');
     });
        return this.plato;
  }
  
  ngOnInit() {
  }

}