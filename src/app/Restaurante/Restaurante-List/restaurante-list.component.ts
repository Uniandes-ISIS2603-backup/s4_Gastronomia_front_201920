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

    constructor(private restauranteService: RestauranteService, private route: ActivatedRoute) {}

    allRest: String = "no";

    getBRestaurantes(): void {
        this.restauranteService.getRestaurantes()
            .subscribe(restaurantes => {
                this.restaurantes = restaurantes;
            });
    }
    getByname():void{
        //if search empty none
        let temp: Restaurante[];
        for(var i=0;i<this.restaurantes.length;i++)
        {
            if(this.restaurantes[i].nombre.includes(""))
            {
                temp.push(this.restaurantes[i]);
            }
        }
    }
    getByBenefits():void{

    }
    getByOverReservaMin():void{

    }
    getByBelowReservaMax():void{

    }
    getByOverPrecioMin():void{

    }
    getByBelowPrecioMax():void{

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
    ngOnInit()
    {
        this.getBRestaurantes();
        this.allRest="yes";
        this.getAllTipos();
    }
}

