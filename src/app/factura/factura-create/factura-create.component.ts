import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FacturaService } from '../factura.service';
import { Factura } from '../factura';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-factura-create',
  templateUrl: './factura-create.component.html',
  styleUrls: ['./factura-create.component.css'],
  providers: [DatePipe]
})
export class FacturaCreateComponent implements OnInit {

  constructor(
    private dp: DatePipe,
    private facturaService: FacturaService,
    private toastrService: ToastrService) { }

    factura : Factura;
    
   @Output() cancel = new EventEmitter();
   @Output() create = new EventEmitter();

   createFactura(): Factura {
    let dateB: Date = new Date(this.factura.fecha.year, this.factura.fecha.month - 1, this.factura.fecha.day);

    this.factura.fecha = this.dp.transform(dateB, "yyyy-MM-dd'T'HH:mm:ss'Z[UTC]'");


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







