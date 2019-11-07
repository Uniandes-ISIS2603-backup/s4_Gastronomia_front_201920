import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import {RestauranteService} from '../Restaurante.service';
import {Restaurante} from '../Restaurante';
import { RestauranteDetail } from '../Restaurante-Detail';

@Component({
    selector:'app-restaurante-list',
    templateUrl: './restaurante-list.component.html',
    styleUrls:[ './restaurante-list.component.css']    
})

export class RestauranteListComponent implements OnInit
{
    @Input() restaurantes: Restaurante[];

    constructor(private restauranteService: RestauranteService, private route: ActivatedRoute) {}

    allRest: String = "no";

    getBRestaurantes(): void {
        this.restauranteService.getRestaurantes()
            .subscribe(restaurantes => {
                this.restaurantes = restaurantes;
            });
    }

    ngOnInit()
    {
        this.getBRestaurantes();
        this.allRest="yes";
    }
}

