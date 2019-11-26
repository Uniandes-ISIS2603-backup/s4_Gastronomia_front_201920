import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import {RestauranteService} from '../Restaurante.service';
import {Restaurante} from '../Restaurante';
import { RestauranteDetail } from '../Restaurante-Detail';
import { Administrador } from '../../administrador/administrador';
import { s } from '@angular/core/src/render3';
import { Plato } from '../plato';
import { Reserva } from '../../reserva/reserva';
import {} from 'googlemaps';



import { RestaurantePlatoComponent } from '../restaurante-plato/restaurante-plato.component';
import { RestauranteAgregarPlatoComponent } from '../restaurante-agregar-plato/restaurante-agregar-plato.component';

@Component({
    selector:'app-restaurante-detail',
    templateUrl: './restaurante-detail.component.html',
    styleUrls:[ './restaurante-detail.component.css'],
    providers:[]
})
export class RestauranteDetailComponent{
    restauranteDetail:RestauranteDetail;
    id:number;
    platos:Plato[]
    reservas:Reserva[]
    navigationSubscription;
    administrador:Administrador;
    benefits:String[];
    esAdmi:Boolean;
    esVisitante:Boolean;
    @ViewChild(RestaurantePlatoComponent) platoListComponent: RestaurantePlatoComponent;

    @ViewChild(RestauranteAgregarPlatoComponent) platoAgregarComponent: RestauranteAgregarPlatoComponent;

    togglePlatos(): void 
    {
        if(this.platoAgregarComponent.isCollapsed == false)
        {
            this.platoAgregarComponent.isCollapsed = true;
        }
        this.platoListComponent.isCollapsed = !this.platoListComponent.isCollapsed;

   }
   toggleCreatePlato():void{
       if(this.platoListComponent.isCollapsed == false)
       {
          this.platoListComponent.isCollapsed = true;
       }
       this.platoAgregarComponent.isCollapsed = !this.platoAgregarComponent.isCollapsed;
   }
    constructor(
        private restauranteService: RestauranteService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) {
        
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    getBenefits():String[]
    {
        let s:String[]=[];
        if(this.restauranteDetail.musicaEnVivo)
        {
            s.push("Música En Vivo");
        }
        if(this.restauranteDetail.petFriendly)
        {
            s.push("Pet Friendly");
        }
        if(this.restauranteDetail.servicioALaMesa)
        {
            s.push("Servicio a la Mesa");
        }
        if(this.restauranteDetail.descuentoCumpleanos)
        {
            s.push("Descuento De Cumpleaños");
        }
        if(this.restauranteDetail.zonaDeFumadores)
        {
            s.push("Zona Fumadore");
        }
        return s;
    }
    updatePlatos(): void{
        this.getDetailRestaurant();
        this.platoListComponent.updatePlatos(this.restauranteDetail.platos);
        this.platoListComponent.isCollapsed =false;
        this.platoAgregarComponent.isCollapsed = true;
    }

    getDetailRestaurant():void{
        this.restauranteService.getRestauranteDetail(this.id)
            .subscribe(restauranteDetail => {
                this.restauranteDetail =restauranteDetail;
            });
    }

    ngOnInit(){
        this.id = +this.route.snapshot.paramMap.get('id');
        this.restauranteDetail = new RestauranteDetail();
        this.getDetailRestaurant();        
        this.benefits=this.getBenefits();

    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }

    deleteThis()
    {
        this.restauranteService.deleteRestaurante(this.restauranteDetail.id);
    }
    
   
}