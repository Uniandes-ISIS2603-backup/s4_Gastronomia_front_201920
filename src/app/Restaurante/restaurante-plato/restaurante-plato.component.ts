import {Component, OnInit, OnDestroy, Input, ViewChild, ViewContainerRef} from '@angular/core';
import { Plato } from '../plato';
import {RestauranteService} from '../Restaurante.service';
import { Restaurante } from '../Restaurante';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import{RestauranteEditarPlatoComponent} from '../restaurante-editar-plato/restaurante-editar-plato.component'
@Component({
    selector:'app-restaurante-plato',
    templateUrl: './restaurante-plato.component.html',
    styleUrls: ['./restaurante-plato.component.css']
  })
  export class RestaurantePlatoComponent implements OnInit {
   
    constructor(private restauranteService: RestauranteService,
      private modalDialogService: ModalDialogService,
      private viewRef: ViewContainerRef,
      private router: Router,
      private toastrService: ToastrService)
    {

    }


    @ViewChild(RestauranteEditarPlatoComponent) platoEditarComponent: RestauranteEditarPlatoComponent;
    
    @Input() restaurantePlatos: Plato[];

    @Input() restaurante: Restaurante;

    public isCollapsed = false;

    editar(plato)
    {
      this.platoEditarComponent.plato.id = plato.id;
      this.platoEditarComponent.isCollapsed =  !this.platoEditarComponent.isCollapsed;
    }

    updatePlatos(platos: Plato[]):void{
        this.restaurantePlatos = platos;
    }

    deletePlato(platoId)
    {
      this.modalDialogService.openDialog(this.viewRef, {
        title: 'Eliminar un plato',
        childComponent: SimpleModalComponent,
        data: {text: 'Esta seguro de que quiere eliminar este plato ?'},
        actionButtons: [
            {
                text: 'Si',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.restauranteService.deletePlato(this.restaurante.id, platoId).subscribe(o => {
                        this.toastrService.success("El plato fue eliminado correctamente");
                        this.router.navigate(['/restaurantes/' + this.restaurante.id]);
                    }, err => {
                        this.toastrService.error(err, "Error");
                    });
                    return true;
                }
            },
            {text: 'No', onAction: () => true}
        ]
    }); 
    }
    

    ocultar()
    {
     this.isCollapsed = true;
    }
      
    ngOnInit() {

    }
  
  }