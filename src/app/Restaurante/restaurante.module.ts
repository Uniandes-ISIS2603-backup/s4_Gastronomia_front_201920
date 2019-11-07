import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {RestauranteListComponent} from './Restaurante-List/restaurante-list.component';
import {RestauranteCreateComponent} from './Restaurante-create/Restaurante-create.component';
import {RestauranteDetailComponent} from './Restaurante-detail/Restaurante_detail.component';

import{AdministradorModule} from '../administrador/administrador.module';

import {RestauranteService} from './Restaurante.service';
import { Restaurante } from './Restaurante';

@NgModule({
    imports:[BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        AdministradorModule,
        ReactiveFormsModule,
        NgxPermissionsModule],
        declarations:[RestauranteListComponent,RestauranteCreateComponent,RestauranteDetailComponent],
        providers:[RestauranteService],
        exports:[RestauranteListComponent]
})
export class RestauranteModule{}