import { Component, OnInit , ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { FacturaService } from '../factura.service';
import { Factura } from '../factura';


@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit 
{

 facturas: Factura[];

 factura_id:number;
 
 selectedFactura:Factura;

 showCreate: boolean;

 showEdit:boolean;

 showView: boolean;


  /**
    * Constructor para el componente
    * @param facturaService 
    */
   constructor(
    private facturaService: FacturaService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) { }

    showHideCreate(): void {
      this.showView = false;
      this.showEdit = false;
      this.showCreate = !this.showCreate;
    }
  
    getFacturas() {
      this.facturaService.getFacturas()
        .subscribe(facturas => this.facturas = facturas);
    }
  
    ngOnInit() {
      this.showCreate = false;
      this.showView = false;
      this.showEdit = false;
      
      this.factura_id = undefined;
      this.getFacturas();
    }
}

