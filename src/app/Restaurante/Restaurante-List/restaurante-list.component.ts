import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import {RestauranteService} from '../Restaurante.service';
import {Restaurante} from '../Restaurante';

@Component({
    selector:'app-restaurante-list',
    templateUrl: './restaurante-list.component.html',
    styleUrls:[ './restaurante-list.component.css']    
})

export class RestauranteListComponent implements OnInit
{
    @Input() restaurantes: Restaurante[];

    Tipos: String[];

    minReserva: Number;

    maxReserva: Number;

    minPrecio: Number;

    maxPrecio: Number;

    lat:Number;

    lon:Number;

    x = document.getElementById("GGG");

    constructor(private restauranteService: RestauranteService, private route: ActivatedRoute) {}

    allRest: String = "no";

    map:Boolean;

    getBRestaurantes(): void {
        this.restauranteService.getRestaurantes()
            .subscribe(restaurantes => {
                this.restaurantes = restaurantes;
            });
    }
    getByname():void{
        let t=(<HTMLInputElement>document.getElementById("Buscador")).value;
        
        for(var i=0;i<this.restaurantes.length;i++)
        {
            if(!this.restaurantes[i].nombre.includes(t))
            {
                this.restaurantes.splice(i,1);
                i--;
            }
        }
    }
    getByBenefits():void{
        let cumpleanos=(<HTMLInputElement>document.getElementById("Cumpleanos"));
        let fumadores=(<HTMLInputElement>document.getElementById("Fumadores"));
        let pets=(<HTMLInputElement>document.getElementById("Pets"));
        let mesa=(<HTMLInputElement>document.getElementById("Mesa"));
        let musica=(<HTMLInputElement>document.getElementById("Musica"));

        if(cumpleanos.checked)
        {
            for(var i=0;i<this.restaurantes.length;i++)
            {
                if(!this.restaurantes[i].descuentoCumpleanos)
                {
                    this.restaurantes.splice(i,1);
                    i-=1;
                }
            }
        }
        if(fumadores.checked)
        {
            for(var i=0;i<this.restaurantes.length;i++)
            {
                if(!this.restaurantes[i].zonaDeFumadores)
                {
                    this.restaurantes.splice(i,1);
                    i-=1;
                }
            }
        }
        if(pets.checked)
        {
            for(var i=0;i<this.restaurantes.length;i++)
            {
                if(!this.restaurantes[i].petFriendly)
                {
                    this.restaurantes.splice(i,1);
                    i-=1;
                }
            }
        }
        if(mesa.checked)
        {
            for(var i=0;i<this.restaurantes.length;i++)
            {
                if(!this.restaurantes[i].servicioALaMesa)
                {
                    this.restaurantes.splice(i,1);
                    i-=1;
                }
            }
        }
        if(musica.checked)
        {
            for(var i=0;i<this.restaurantes.length;i++)
            {
                if(!this.restaurantes[i].musicaEnVivo)
                {
                    this.restaurantes.splice(i,1);
                    i-=1;
                }
            }
        }
    }
    getByOverReservaMin():void{
        let m=(<HTMLInputElement>document.getElementById("minReserva")).valueAsNumber;
        for(var i=0; i<this.restaurantes.length;i++)
        {
            if(this.restaurantes[i].costoReserva<m)
            {
                this.restaurantes.splice(i,1);
                i--;
            }
        }
    }
    getByBelowReservaMax():void{
        let m=(<HTMLInputElement>document.getElementById("maxReserva")).valueAsNumber;
        for(var i=0; i<this.restaurantes.length;i++)
        {
            if(this.restaurantes[i].costoReserva>m)
            {
                this.restaurantes.splice(i,1);
                i--;
            }
        }
    }
    getByOverPrecioMin():void{
        let m=(<HTMLInputElement>document.getElementById("minPrecio")).valueAsNumber;
        for(var i=0; i<this.restaurantes.length;i++)
        {
            if(this.restaurantes[i].costoReserva<m)
            {
                this.restaurantes.splice(i,1);
                i--;
            }
        }
    }
    getByBelowPrecioMax():void{
        let m=(<HTMLInputElement>document.getElementById("maxPrecio")).valueAsNumber;
        for(var i=0; i<this.restaurantes.length;i++)
        {
            if(this.restaurantes[i].costoReserva>m)
            {
                this.restaurantes.splice(i,1);
                i--;
            }
        }
    }
    getByTipo(t:String):void{
        let c: Restaurante[];
        for(var i=0; i<this.restaurantes.length;i++)
        {
            if(this.restaurantes[i].tipoRestaurante==t)
            {
                c.push(this.restaurantes[i]);
            }
        }
        this.restaurantes=c;
    }
    getAllTipos():void{
        for(var i=0;i<this.restaurantes.length;i++)
        {
            if(!this.Tipos.includes(this.restaurantes[i].tipoRestaurante))
            {
                this.Tipos.push(this.restaurantes[i].tipoRestaurante)
            }
        }
    }
    getMaxMin():void
    {
        this.minReserva=new Number(Number.MAX_VALUE);
        this.maxReserva=new Number(0.0);
        this.minPrecio=new Number(Number.MAX_VALUE);
        this.maxPrecio=new Number(0.0);
        
        for(var i=0;i<this.restaurantes.length;i++)
        {
            let r = this.restaurantes[i].costoReserva;
            let p=this.restaurantes[i].precioPorPersona;
            if(r<=this.minReserva)
            {
                this.minReserva=r;
            }
            else if(r>=this.maxReserva)
            {
                this.maxReserva=r;
            }
            if(p<=this.minPrecio)
            {
                this.minPrecio=p;
            }
            else if(p>=this.maxPrecio)
            {
                this.maxPrecio=p;
            }
        }    
    }

    change():void{
        this.map=!this.map;
        this.getLocation();
    }

    ngOnInit()
    {
        this.getBRestaurantes();
        this.allRest="yes";
        this.getAllTipos();
        this.getMaxMin();
        this.map=false;
        
    }

    getLocation():void{
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
          } else { 
            alert("This devive does not support GeoLoc");
          }
    }
    showPosition(position) {
        try
        {
            this.lat=position.coords.latitude;
            this.lon=position.coords.longitude;
        }
        catch(error)
        {
            this.lat=4.602973;
            this.lon=-74.065081;
        }        
        alert("This is your location: "+this.lon+", "+this.lat);
    }
}

