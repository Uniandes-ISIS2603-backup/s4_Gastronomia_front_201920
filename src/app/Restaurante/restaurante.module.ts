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
import {RestauranteAgregarPlatoComponent} from './restaurante-agregar-plato/restaurante-agregar-plato.component';
 

import{AdministradorModule} from '../administrador/administrador.module';

import {RestauranteService} from './Restaurante.service';
import { Restaurante } from './Restaurante';
import { RestaurantePlatoComponent } from './restaurante-plato/restaurante-plato.component';
import { RestauranteEditComponent } from './Restaurante-edit/restaurante-edit.component';

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
        declarations:[RestauranteListComponent,RestauranteCreateComponent,RestauranteDetailComponent,RestauranteAgregarPlatoComponent,RestaurantePlatoComponent, RestauranteEditComponent ],
        providers:[RestauranteService],
        exports:[RestauranteListComponent]
})
export class RestauranteModule{}