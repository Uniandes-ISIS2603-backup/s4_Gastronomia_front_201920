import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ClienteService } from './cliente.service';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteTarjetaComponent} from './cliente-tarjeta/cliente-tarjeta.component';
import { ClienteAgregarTarjetaComponent } from './cliente-agregar-tarjeta/cliente-agregar-tarjeta.component';


@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [ClienteListComponent,
                 ClienteDetailComponent,
                 ClienteCreateComponent,
                 ClienteTarjetaComponent,
                 ClienteAgregarTarjetaComponent],
  providers: [ClienteService],
  exports: [ClienteListComponent,
            ClienteDetailComponent,
            ClienteCreateComponent]
})
export class ClienteModule { }
