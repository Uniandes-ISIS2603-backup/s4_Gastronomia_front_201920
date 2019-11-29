import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {Tarjeta} from '../tarjeta';
import {TarjetaService} from '../tarjeta.service';
import {ToastrService} from 'ngx-toastr';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-tarjeta-create',
  templateUrl: './tarjeta-create.component.html',
  styleUrls: ['./tarjeta-create.component.css'],
  providers: [DatePipe]
})
export class TarjetaCreateComponent implements OnInit {


  tarjetaForm: FormGroup;
  constructor( private tarjetaService: TarjetaService,
    private toastrService: ToastrService,
    private dp: DatePipe
    )
  {}

     

  tarjeta: Tarjeta;


  @Output() create = new EventEmitter();

   createTarjeta(): Tarjeta
   {
     let dateF: Date = new Date(this.tarjeta.fecha.year,this.tarjeta.fecha.month, this.tarjeta.fecha.day );
     this.tarjeta.fecha = this.dp.transform(dateF, 'yyyy-MM-dd'); 
     this.tarjetaService.createTarjeta(this.tarjeta).subscribe((tarjeta) => 
     {
       this.tarjeta = tarjeta;
       this.create.emit();
       this.toastrService.success("La tarjeta fue creada", "Creacion tarjeta");

     })
      return this.tarjeta;
   }
  ngOnInit() {
    this.tarjeta = new Tarjeta();
  }

}  