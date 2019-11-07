import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FacturaService } from '../factura.service';
import { Factura } from '../factura';


@Component({
  selector: 'app-factura-create',
  templateUrl: './factura-create.component.html',
  styleUrls: ['./factura-create.component.css']
})
export class FacturaCreateComponent implements OnInit {

  constructor(
    private facturaService: FacturaService,
    private toastrService: ToastrService) { }

    factura : Factura;
    
   @Output() cancel = new EventEmitter();
   @Output() create = new EventEmitter();

   createFactura(): Factura {
    
  this.facturaService.createFactura(this.factura)
    .subscribe((factura) => {
      this.factura = factura;
      this.create.emit();
      this.toastrService.success("La factura fue creada!", "Creación de factura");

    });
  return this.factura;
}

    cancelCreation(): void {
      this.cancel.emit();
    }

    ngOnInit() {
      this.factura = new Factura();
    }

}







