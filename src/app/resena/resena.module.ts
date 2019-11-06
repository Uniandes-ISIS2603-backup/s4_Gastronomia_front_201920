import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResenaListComponent } from './resena-list/resena-list.component';
import { ResenaDetailComponent } from './resena-detail/resena-detail.component';
import { ResenaCreateComponent } from './resena-create/resena-create.component';



@NgModule({
  declarations: [ResenaListComponent, ResenaDetailComponent, ResenaCreateComponent],
  imports: [
    CommonModule
  ]
})
export class ResenaModule { }
