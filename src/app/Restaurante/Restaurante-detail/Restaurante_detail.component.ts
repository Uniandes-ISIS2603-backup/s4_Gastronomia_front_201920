import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import {RestauranteService} from '../Restaurante.service';
import {Restaurante} from '../Restaurante';
import { RestauranteDetail } from '../Restaurante-Detail';
import { Administrador } from '../../administrador/administrador';
import { s } from '@angular/core/src/render3';

@Component({
    selector:'app-restaurante-detail',
    templateUrl: './restaurante-detail.component.html',
    styleUrls:[ './restaurante-detail.component.css'],
    providers:[]
})
export class RestauranteDetailComponent{
    restauranteDetail:RestauranteDetail;
    id:number;
    //platos:Plato[]
    //reservas:Reserva[]
    navigationSubscription;
    administrador:Administrador;
    benefits:String[];
    esAdmi:Boolean;
    esVisitante:Boolean;

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
        if(this.restauranteDetail.descuentaoCumpleanos)
        {
            s.push("Descuento De Cumpleaños");
        }
        if(this.restauranteDetail.zonaDeFumadores)
        {
            s.push("Zona Fumadore");
        }
        return s;
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
}