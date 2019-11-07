import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodblogListComponent } from './foodblog-list/foodblog-list.component';
import { FoodblogDetailComponent } from './foodblog-detail/foodblog-detail.component';
import { FoodblogCreateComponent } from './foodblog-create/foodblog-create.component';



@NgModule({
  declarations: [FoodblogListComponent, FoodblogDetailComponent, FoodblogCreateComponent],
  imports: [
    CommonModule
  ]
})
export class FoodblogModule { }
