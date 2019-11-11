import { Component, OnInit, Input, } from '@angular/core';
import { Plato } from '../plato';

@Component({
    selector:'app-restaurante-plato',
    templateUrl: './restaurante-plato.component.html',
    styleUrls: ['./restaurante-plato.component.css']
  })
  export class RestaurantePlatoComponent implements OnInit {


    @Input() restaurantePlatos: Plato[];

    updatePlatos(platos: Plato[]):void{
      console.log("Es que nunca me llaman");
        platos.forEach(o => 
          {
            console.log(o.nombreComida);
          }
          );
        this.restaurantePlatos = platos;
    }

    public isCollapsed = false;
      
    ngOnInit() {
      console.log("Hola");

    }
  
  }