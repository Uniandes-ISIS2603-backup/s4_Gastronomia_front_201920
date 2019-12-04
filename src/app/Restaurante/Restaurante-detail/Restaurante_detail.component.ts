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
import { ClienteDetail } from '../../cliente/cliente-detail';
import {} from 'googlemaps';



import { RestaurantePlatoComponent } from '../restaurante-plato/restaurante-plato.component';
import { RestauranteAgregarPlatoComponent } from '../restaurante-agregar-plato/restaurante-agregar-plato.component';
import { ClienteService } from '../../cliente/cliente.service';

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

    @ViewChild('map') mapElement: any;
    map: google.maps.Map;

    marker:any;
    
    @ViewChild(RestaurantePlatoComponent) platoListComponent: RestaurantePlatoComponent;

    @ViewChild(RestauranteAgregarPlatoComponent) platoAgregarComponent: RestauranteAgregarPlatoComponent;

    reservar: boolean;

    clienteDetail: ClienteDetail;

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
        private clienteService: ClienteService,
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
    directionsService:any;
    directionsRenderer:any;
    geocoder:any;
    ngOnInit(){
        this.id = +this.route.snapshot.paramMap.get('id');
        this.restauranteDetail = new RestauranteDetail();
        this.getDetailRestaurant();        
        this.benefits=this.getBenefits();
        const mapProperties = {
            center: new google.maps.LatLng(35.2271, -80.8431),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
       };
       this.map = new google.maps.Map(this.mapElement.nativeElement,mapProperties);
       this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({suppressMarkers:true});
       this.geocoder = new google.maps.Geocoder();
       this.codeAddress();
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
    codeAddress() {
        
        this.geocoder.geocode( { 'address': this.restauranteDetail.direccion+",Bogotá,Colombia"}, function(results, status) {
          if (status == 'OK') {
            this.map.setCenter(results[0].geometry.location);
            console.log(results[0]);
            this.marker = new google.maps.Marker({
                map: this.map,
                position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
      }
    deleteThis()
    {
        this.restauranteService.deleteRestaurante(this.restauranteDetail.id);
<<<<<<< HEAD
    }    
    
   }
=======
    }
    
    toggleReservar() {
        console.log('hola')
        this.reservar = true;
        this.clienteService.getClienteDetail(parseInt(localStorage.getItem('userId'))).subscribe(clienteDetail => this.clienteDetail = clienteDetail)
    }
}
>>>>>>> 947372bfd8f84dcfe2e99f8e407d095b7f510810
