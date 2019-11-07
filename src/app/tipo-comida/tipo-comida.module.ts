import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule} from 'ngx-permissions';
import { CommonModule } from '@angular/common';
import { TipoComidaListComponent } from './tipo-comida-list/tipo-comida-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { TipoComidaCreateComponent } from './tipo-comida-create/tipo-comida-create.component';


import { TipoComidaService } from './tipo-comida.service';



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
  exports: [TipoComidaListComponent],
  declarations: [TipoComidaListComponent, TipoComidaCreateComponent],
  providers: [TipoComidaService]
})

export class TipoComidaModule { }
