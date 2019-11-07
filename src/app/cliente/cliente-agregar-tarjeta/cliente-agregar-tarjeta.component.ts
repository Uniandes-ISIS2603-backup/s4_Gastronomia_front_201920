
import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Tarjeta } from '../tarjeta';
import { ClienteService } from '../cliente.service';
import { Cliente }from '../cliente';

@Component({
  selector: 'app-cliente-agregar-tarjeta',
  templateUrl: './cliente-agregar-tarjeta.component.html',
  styleUrls: ['./cliente-agregar-tarjeta.component.css']
})
export class ClienteAgregarTarjetaComponent implements OnInit {


  constructor(
    private clienteService: ClienteService,
    private toastrService: ToastrService
  ) { }
  @Input() cliente: Cliente;

  tarjeta: Tarjeta;

  public isCollapsed = true;

  @Output() updateTarjetas = new EventEmitter();

  crearTarjeta(tarjetaForm: NgForm):Tarjeta 
  {
    this.tarjeta.cliente = this.cliente;
    this.clienteService.createTarjeta(this.cliente.id, this.tarjeta).subscribe(() =>{
      tarjetaForm.resetForm();
      this.updateTarjetas.emit();
      this.toastrService.success("Se registro la tarjeta existosamente");
    }, err => 
    {
      this.toastrService.error(err,'Error');
    });
    return this.tarjeta;
  }

  ngOnInit() {
  }

}