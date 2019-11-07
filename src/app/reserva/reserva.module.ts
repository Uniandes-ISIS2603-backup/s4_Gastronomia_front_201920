import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from '../app-routing/app-routing.module';


import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import { ReservaCreateComponent } from './reserva-create/reserva-create.component';
import { ReservaService } from './reserva.service';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ReservaListComponent,
                 ReservaDetailComponent,
                 ReservaCreateComponent],
  providers: [ReservaService],
  exports: [ReservaListComponent,
            ReservaDetailComponent,
            ReservaCreateComponent]
})
export class ReservaModule { }
