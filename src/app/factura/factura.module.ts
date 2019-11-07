import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaCreateComponent } from './factura-create/factura-create.component';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { TipoComidaCreateComponent } from './tipo-comida-create/tipo-comida-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FacturaCreateComponent, FacturaDetailComponent, FacturaListComponent, TipoComidaCreateComponent]
})
export class FacturaModule { }
