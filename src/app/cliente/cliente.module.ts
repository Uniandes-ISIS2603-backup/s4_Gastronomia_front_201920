import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import { ClienteService } from './cliente.service';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';


@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [ClienteListComponent,
                 ClienteDetailComponent,
                 ClienteCreateComponent],
  providers: [ClienteService],
  exports: [ClienteListComponent,
            ClienteDetailComponent,
            ClienteCreateComponent]
})
export class ClienteModule { }
