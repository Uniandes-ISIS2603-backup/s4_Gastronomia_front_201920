
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import {DatePipe} from '@angular/common';

import { Tarjeta } from '../tarjeta';
import { ClienteService } from '../cliente.service';
import { Cliente }from '../cliente';

@Component({
  selector: 'app-cliente-agregar-tarjeta',
  templateUrl: './cliente-agregar-tarjeta.component.html',
  styleUrls: ['./cliente-agregar-tarjeta.component.css'],
  providers: [DatePipe]
})
export class ClienteAgregarTarjetaComponent implements OnInit, OnChanges {


  constructor(
    private dp: DatePipe,
    private clienteService: ClienteService,
    private toastrService: ToastrService
  ) { }
  @Input() cliente: Cliente;

  tarjeta: Tarjeta;

  public isCollapsed = true;

  @Output() updateTarjetas = new EventEmitter();

    /**
 * The output which tells the parent component
 * that the user no longer wants to create an reservation
 */
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user created a new reservation
*/
@Output() create = new EventEmitter();

  crearTarjeta(f: NgForm):Tarjeta 
  {
    let dateB: Date = new Date(this.tarjeta.fechaVencimiento.year, this.tarjeta.fechaVencimiento.month - 1, this.tarjeta.fechaVencimiento.day);

    this.tarjeta.fechaVencimiento = this.dp.transform(dateB, "yyyy-MM-dd'T'HH:mm:ss'Z[UTC]'");
    console.log(this.tarjeta.fechaVencimiento);
    this.tarjeta.cliente = this.cliente;
    this.clienteService.createTarjeta(this.cliente.id, this.tarjeta).subscribe(() =>
    
    {
      
      f.reset();
      this.updateTarjetas.emit();
      this.toastrService.success("Se registro la tarjeta existosamente");
    }, err => 
    {
      this.toastrService.error(err,'Error');
    });
    return this.tarjeta;
  }

   /**
  * Emits the signal to tell the parent component that the
  * user no longer wants to create an user
  */
 cancelCreation(): void {
   
  this.cancel.emit();
}

  ngOnInit() {
    this.tarjeta = new Tarjeta();
  }
  ngOnChanges(): void {
    this.ngOnInit();
  
  }

}