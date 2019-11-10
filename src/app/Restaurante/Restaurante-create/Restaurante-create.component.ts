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
    var nombreRestaurante = document.getElementById('restauranteNombre');
    var contrasenaRestaurante= document.getElementById('restauranteContrasena');
    var direccionRestaurante=document.getElementById('restauranteDireccion');
    var precioPorPersonarestaurante= document.getElementById('restaurante.precioPorPersona');
    var tipoRestauranteR=document.getElementById('restaurante.tipoRestaurante');
    var costoReserva=document.getElementById('restaurante.costoReserva');
    var imagen=document.getElementById('restaurante.imagen');
    var fumadores=document.getElementById('restaurante.zonaDeFumadores');
    var descuento=document.getElementById('restaurante.descuantaoCumpleanos');
    var petFriendly=document.getElementById('restaurante.petFriendly');
    var  musica=document.getElementById('restaurante.musicaEnVivo');
    var mesa=document.getElementById('restaurante.servicioALaMesa');
    
    
    
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
        alert(this.restaurante.nombre+" nombre; "+
        this.restaurante.contrasena+" pass; "+
        this.restaurante.costoReserva+" costor; "+
        this.restaurante.direccion+" direccion; "+
        this.restaurante.horario+" horario; "+
        this.restaurante.imagen+" imagen; "+
        this.restaurante.musicaEnVivo+" musica en vio; "+
        this.restaurante.descuentaoCumpleanos+" descuento cumplpeanos; "+
        this.restaurante.precioPorPersona+" precio por persiona; "+
        this.restaurante.petFriendly+" petfriendly; "+
        this.restaurante.zonaDeFumadores+" fumadores; "+
        this.restaurante.tipoRestaurante+" tipo; "+
        this.restaurante.servicioALaMesa+" servicio a la mesa; ");
    }
}