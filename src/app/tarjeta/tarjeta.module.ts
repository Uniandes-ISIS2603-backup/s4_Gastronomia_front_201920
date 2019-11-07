import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaListComponent } from './tarjeta-list/tarjeta-list.component';
import { TarjetaService } from './tarjeta.service';
import { TarjetaDetailComponent } from './tarjeta-detail/tarjeta-detail.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { TarjetaCreateComponent } from './tarjeta-create/tarjeta-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TarjetaListComponent, TarjetaDetailComponent, TarjetaCreateComponent],
  exports: [TarjetaListComponent,TarjetaCreateComponent],
  providers: [TarjetaService]
})
export class TarjetaModule { }