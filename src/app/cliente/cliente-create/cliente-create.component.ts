import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css'],
  providers: [DatePipe]
})
export class ClienteCreateComponent implements OnInit {

  constructor(
    private dp: DatePipe,
    private clienteService: ClienteService,
    private toastrService: ToastrService
  ) { }

  /**
  * The new client
  */
  cliente: Cliente;

  /**
 * The output which tells the parent component
 * that the user no longer wants to create an client
 */
  @Output() cancel = new EventEmitter();

  /**
 * The output which tells the parent component
 * that the user created a new client
 */
  @Output() create = new EventEmitter();

  /**
  * Creates an client
  */
  createCliente(): Cliente {

    let dateB: Date = new Date(this.cliente.cumpleanos.year, this.cliente.cumpleanos.month - 1, this.cliente.cumpleanos.day);

    this.cliente.cumpleanos = this.dp.transform(dateB, 'yyyy-MM-dd');
    console.log(this.cliente);
    this.clienteService.createCliente(this.cliente)
        .subscribe((cliente) => {
            this.cliente = cliente;
            this.create.emit();
            this.toastrService.success("The client was created", "Client creation");

        });
    return this.cliente;
 }

  /**
  * Emits the signal to tell the parent component that the
  * user no longer wants to create an user
  */
  cancelCreation(): void {
      this.cancel.emit();
  }

  /**
  * This function will initialize the component
  */
  ngOnInit() {
      this.cliente = new Cliente();
  }

}
