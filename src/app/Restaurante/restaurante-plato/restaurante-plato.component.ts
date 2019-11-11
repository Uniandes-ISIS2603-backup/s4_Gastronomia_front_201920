import { Component, OnInit, Input, } from '@angular/core';
import { Plato } from '../plato';
import {RestauranteService} from '../Restaurante.service';

@Component({
    selector:'app-restaurante-plato',
    templateUrl: './restaurante-plato.component.html',
    styleUrls: ['./restaurante-plato.component.css']
  })
  export class RestaurantePlatoComponent implements OnInit {
   
    constructor(private restauranteService: RestauranteService)
    {

    }



    
    @Input() restaurantePlatos: Plato[];

    updatePlatos(platos: Plato[]):void{
        this.restaurantePlatos = platos;
    }

    public isCollapsed = false;
      
    ngOnInit() {

    }
  
  }