import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {RestauranteService} from '../Restaurante.service';
import {Restaurante} from '../Restaurante';
import { RestauranteDetail } from '../Restaurante-Detail';

@Component({
    selector:'app-restaurante-create',
    templateUrl: './restaurante-create.component.html',
    styleUrls:[ './restaurante-create.component.css'],
    providers:[DatePipe]
})
export class RestauranteCreateComponent implements OnInit
{
    constructor(private dp: DatePipe, private restauranteService: RestauranteService, private toastrService: ToastrService, private router: Router){}
    
    /**
     * El restaurante a crear
     */
    restaurante:Restaurante;
    /**
     * Cancela la creación de un restaurante
     */
    @Output() cancel = new EventEmitter();
   @Output() create = new EventEmitter();

   createRestaurante(): Restaurante {
    
  this.restauranteService.createRestaurante(this.restaurante)
    .subscribe((restaurante) => {
      this.restaurante = restaurante;
      this.create.emit();
      this.toastrService.success("El restaurante fue creado!", "Creación del restaurante");

    });
  return this.restaurante;
}

    cancelCreation(): void {
      this.cancel.emit();
    }
    /**
     * inicializa el componente
     */
    ngOnInit()
    {
        this.restaurante=new Restaurante();
    }
}