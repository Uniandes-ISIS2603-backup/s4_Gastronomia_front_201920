import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaService } from './reserva.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReservaListComponent],
  providers: [ReservaService],
  exports: [ReservaListComponent]
})
export class ReservaModule { }
