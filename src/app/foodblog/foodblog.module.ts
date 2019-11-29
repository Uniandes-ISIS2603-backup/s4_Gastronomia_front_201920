import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import { FoodblogListComponent } from './foodblog-list/foodblog-list.component';
import { FoodblogDetailComponent } from './foodblog-detail/foodblog-detail.component';
import { FoodblogCreateComponent } from './foodblog-create/foodblog-create.component';

import {FoodBlogService} from './foodblog.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { FoodBlog } from './foodblog';

@NgModule({
  declarations: [FoodblogListComponent,
     FoodblogDetailComponent, 
     FoodblogCreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPermissionsModule,
    CommonModule,
    FormsModule
  ],
  providers:[FoodBlogService],
  exports:[FoodblogListComponent]
})
export class FoodblogModule { }
