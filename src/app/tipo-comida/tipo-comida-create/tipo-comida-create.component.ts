import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TipoComidaService } from '../tipo-comida.service';
import { TipoComida } from '../tipo-comida';



@Component({
  selector: 'app-tipo-comida-create',
  templateUrl: './tipo-comida-create.component.html',
  styleUrls: ['./tipo-comida-create.component.css']
})
export class TipoComidaCreateComponent implements OnInit {

  constructor(
    private tipoComidaService: TipoComidaService,
    private toastrService: ToastrService) { }

    tipoComida : TipoComida;
    
   @Output() cancel = new EventEmitter();
   @Output() create = new EventEmitter();

   createTipoComida(): TipoComida {
    
  this.tipoComidaService.createTipoComida(this.tipoComidaService)
    .subscribe((tipoComida) => {
      this.tipoComida = tipoComida;
      this.create.emit();
      this.toastrService.success("El tipo comida fue creado!", "Creación de tipo comida");

    });
  return this.tipoComida;
}

    cancelCreation(): void {
      this.cancel.emit();
    }

    ngOnInit() {
      this.tipoComida = new TipoComida();
    }
}








