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

   createRestaurante(): Restaurante
    {       
      this.restaurante.horario=new Date();
      this.restauranteService.createRestaurante(this.restaurante)
      .subscribe((restaurante) => {
        this.restaurante = restaurante;
        this.create.emit();
        this.toastrService.success("El restaurante fue creado!", "Creación del restaurante");

      });
      return this.restaurante;
}

onTime():void{
  let name=(<HTMLInputElement>document.getElementById("nameValue"));
  let passValue=(<HTMLInputElement>document.getElementById("passValue"));
  let dirValue=(<HTMLInputElement>document.getElementById("dirValue"));
  let imgValue=(<HTMLInputElement>document.getElementById("imgValue"));
  let costoRValue=(<HTMLInputElement>document.getElementById("costoRValue"));
  let precioPValue=(<HTMLInputElement>document.getElementById("precioPValue"));
  let tipoValue=(<HTMLInputElement>document.getElementById("tipoValue"));

  this.restaurante.nombre=name.value;
  this.restaurante.contrasena=passValue.value;
  this.restaurante.direccion=dirValue.value;
  this.restaurante.imagen=imgValue.value;
  this.restaurante.costoReserva=costoRValue.valueAsNumber;
  this.restaurante.precioPorPersona=precioPValue.valueAsNumber;
  this.restaurante.tipoRestaurante=tipoValue.value;

  this.card();
}

verifyPassword():void{
  let passValue=(<HTMLInputElement>document.getElementById("passValue"));
  let repeatValue=(<HTMLInputElement>document.getElementById("repeatPass"));
  if(passValue.value!==repeatValue.value)
  {
    repeatValue.style.backgroundColor="red";
  }
  else
  {
    repeatValue.style.backgroundColor="green";
  }
}

trueDescuento():void{
  this.restaurante.descuentoCumpleanos=true;
  this.card();
}
falseDescuento():void{
  this.restaurante.descuentoCumpleanos=false;
  this.card();
}

trueFumadores():void{
  this.restaurante.zonaDeFumadores=true;
  this.card(); 
}
falseFumadores():void{
  this.restaurante.zonaDeFumadores=false;
  this.card();
}

truePet():void{
  this.restaurante.petFriendly=true;
  this.card();
  
}
falsePet():void{
  this.restaurante.petFriendly=false;
  this.card();
}

trueMusica():void{
  this.restaurante.musicaEnVivo=true;
  this.card();  
}
falseMusica():void{
  this.restaurante.musicaEnVivo=false;
  this.card();
}

trueService():void{
  this.restaurante.servicioALaMesa=true;
  this.card();
}
falseService():void{
  this.restaurante.servicioALaMesa=false;
  this.card();
}

card():void{
  let name=document.getElementById("cardName");
  let descuento=document.getElementById("cardDescuento");
  let direccion=document.getElementById("cardDireccion");
  let imagen=document.getElementById("cardIm");

  let costoReserva=document.getElementById("cardCostoReserva");
  let precioPorPersona=document.getElementById("cardPrecioPersona");
  let fumadores=document.getElementById("cardFumadores");

  let petFriendly=document.getElementById("cardPet");
  let musicaEnVivo=document.getElementById("cardMusica");
  let servicioALaMesa=document.getElementById("cardServicio");
  let tipo=document.getElementById("cardTipo");

  tipo.innerText='Tipo: '+this.restaurante.tipoRestaurante;
  name.innerText=(<string>this.restaurante.nombre);
  imagen.innerText='URL imagen: '+this.restaurante.imagen;

  if(this.restaurante.descuentoCumpleanos==undefined)
  {
    descuento.innerText='Descuento de Cumpleaños None';
  }
  else if(this.restaurante.descuentoCumpleanos)
  {
    descuento.innerText='Descuento de Cumpleaños True';
  }
  else
  {
    descuento.innerText='Descuento de Cumpleaños False';
  }

  direccion.innerText="Dirección: "+this.restaurante.direccion;
  costoReserva.innerText='Costo Reserva '+this.restaurante.costoReserva;
  precioPorPersona.innerText='Precio Por Persona '+this.restaurante.precioPorPersona;

  if(this.restaurante.zonaDeFumadores==undefined)
  {
    fumadores.innerText='Zona Fumadores None';
  }
  else if(this.restaurante.zonaDeFumadores)
  {
    fumadores.innerText='Zona Fumadores True';
  }
  else
  {
    fumadores.innerText='Zona Fumadores False';
  }

  if(this.restaurante.petFriendly==undefined)
  {
    petFriendly.innerText='Pet Friendly None';
  }
  else if(this.restaurante.petFriendly)
  {
    petFriendly.innerText='Pet Friendly True';
  }
  else
  {
    petFriendly.innerText='Pet Friendly False';
  }

  if(this.restaurante.musicaEnVivo==undefined)
  {
    musicaEnVivo.innerText='Musica En Vivo None';
  }
  else if(this.restaurante.musicaEnVivo)
  {
    musicaEnVivo.innerText='Musica En Vivo True';
  }
  else
  {
    musicaEnVivo.innerText='Musica En Vivo False';
  }

  if(this.restaurante.servicioALaMesa==undefined)
  {
    servicioALaMesa.innerText='Servicio A La Mesa None';
  }
  else if(this.restaurante.servicioALaMesa)
  {
    servicioALaMesa.innerText='Servicio A La Mesa True';
  }
  else
  {
    servicioALaMesa.innerText='Servicio A La Mesa False';
  }
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