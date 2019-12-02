import {Component, OnInit, OnDestroy, Input, ViewChild, ViewContainerRef} from '@angular/core';
import { Tarjeta } from  '../tarjeta';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';

import {ClienteEditarTarjetaComponent} from '../cliente-editar-tarjeta/cliente-editar-tarjeta.component';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-cliente-tarjeta',
  templateUrl: './cliente-tarjeta.component.html',
  styleUrls: ['./cliente-tarjeta.component.css']
})
export class ClienteTarjetaComponent implements OnInit {


 @ViewChild(ClienteEditarTarjetaComponent) tarjetaEditarComponent: ClienteEditarTarjetaComponent;

 @Input() clienteTarjetas : Tarjeta [];

 @Input() cliente: Cliente;

 constructor(private clienteService: ClienteService,
  private modalDialogService: ModalDialogService,
  private viewRef: ViewContainerRef,
  private router: Router,
  private toastrService: ToastrService)
 {}

 editar(tarjeta:Tarjeta)
 {
    this.tarjetaEditarComponent.tarjeta.id = tarjeta.id;
    this.tarjetaEditarComponent.isCollapsed =  !this.tarjetaEditarComponent.isCollapsed;
 }
 updateTarjetas(tarjetas:Tarjeta[]): void {
        this.clienteTarjetas = tarjetas;
    }

    deleteTarjeta(tarjeta: Tarjeta)
    {
      this.modalDialogService.openDialog(this.viewRef, {
        title: 'Eliminar una tarjeta',
        childComponent: SimpleModalComponent,
        data: {text: 'Esta seguro de que quiere eliminar esta tarjeta ?'},
        actionButtons: [
            {
                text: 'Si',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.clienteService.deleteTarjeta(this.cliente.id, tarjeta.id).subscribe(o => {
                        this.toastrService.success("La tarjeta fue eliminada correctamente");
                        this.router.navigate(['/clientes/' + this.cliente.id]);
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

 public isCollapsed = false;
  ngOnInit() {
  }

}