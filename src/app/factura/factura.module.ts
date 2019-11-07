import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule} from 'ngx-permissions';
import { CommonModule } from '@angular/common';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import { FacturaCreateComponent } from './factura-create/factura-create.component';


import { FacturaService } from './factura.service';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxPermissionsModule,
    FormsModule,
    NgbModule
  ],
  exports: [FacturaListComponent],
  declarations: [FacturaListComponent, FacturaDetailComponent, FacturaCreateComponent],
  providers: [FacturaService]
})
export class FacturaModule { }
