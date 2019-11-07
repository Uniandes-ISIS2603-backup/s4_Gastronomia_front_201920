import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoComidaListComponent } from './tipo-comida-list/tipo-comida-list.component';
import { TipoComidaCreateComponent } from './tipo-comida-create/tipo-comida-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TipoComidaListComponent, TipoComidaCreateComponent]
})
export class TipoComidaModule { }
