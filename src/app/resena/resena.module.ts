import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';


import {AppRoutingModule} from '../app-routing/app-routing.module';
import{ResenaService} from './resena.service';
import { ResenaListComponent } from './resena-list/resena-list.component';
import { ResenaDetailComponent } from './resena-detail/resena-detail.component';
import { ResenaCreateComponent } from './resena-create/resena-create.component';



@NgModule({
    imports: 
      [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPermissionsModule,
        CommonModule,
        FormsModule
      ],
   declarations:
    [
      ResenaListComponent,
    ResenaDetailComponent,
     ResenaCreateComponent
    ],
    providers:[ResenaService]
})
export class ResenaModule { }
