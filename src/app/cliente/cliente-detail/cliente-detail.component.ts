import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

import { ClienteDetail } from '../cliente-detail';
import { ClienteService } from '../cliente.service';
import{ ClienteTarjetaComponent} from '../cliente-tarjeta/cliente-tarjeta.component';
import {ClienteAgregarTarjetaComponent} from '../cliente-agregar-tarjeta/cliente-agregar-tarjeta.component';
@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  @ViewChild(ClienteTarjetaComponent) tarjetaListComponent: ClienteTarjetaComponent;

  @ViewChild(ClienteAgregarTarjetaComponent) tarjetaAgregarComponent: ClienteTarjetaComponent;

  toggleTarjetas(): void 
  {
      if(this.tarjetaAgregarComponent.isCollapsed == false)
      {
          this.tarjetaAgregarComponent.isCollapsed = true;
      }
      this.tarjetaListComponent.isCollapsed = !this.tarjetaListComponent.isCollapsed;

 }
 toggleCreateTarjeta():void{
     if(this.tarjetaListComponent.isCollapsed == false)
     {
        this.tarjetaListComponent.isCollapsed = true;
     }
     this.tarjetaAgregarComponent.isCollapsed = !this.tarjetaAgregarComponent.isCollapsed;
 }

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }
 
  clienteDetail : ClienteDetail;

  /**
    * The cliente's id retrieved from the address
    */
  cliente_id: number;

  getClienteDetail() : void {
    this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(clienteDetail => {
                this.clienteDetail = clienteDetail
            });

  }

  updateTarjetas(): void {
    this.getClienteDetail();
    this.tarjetaListComponent.updateTarjetas(this.clienteDetail.tarjetas);
    this.tarjetaListComponent.isCollapsed =false;
    this.tarjetaAgregarComponent.isCollapsed = true;
  }

  ngOnInit() {
    this.cliente_id = + this.route.snapshot.paramMap.get('id');
    if (this.cliente_id) {
      this.clienteDetail = new ClienteDetail();
      this.getClienteDetail();
    }
  }

}
