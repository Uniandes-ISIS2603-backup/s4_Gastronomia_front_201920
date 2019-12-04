import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {ReservaService} from '../reserva.service';
import {Reserva} from '../reserva';
import {ReservaDetail} from '../reserva-detail';
import {Cliente} from '../../cliente/cliente';
import { Restaurante } from '../../Restaurante/Restaurante';

@Component({
  selector: 'app-reserva-create',
  templateUrl: './reserva-create.component.html',
  styleUrls: ['./reserva-create.component.css'],
  providers: [DatePipe]
})
export class ReservaCreateComponent implements OnInit {

  constructor(
    private dp: DatePipe,
    private reservaService: ReservaService,
    private toastrService: ToastrService
  ) { }

  /**
  * The new reservation
  */
  reserva: ReservaDetail;

  @Input() cliente: Cliente;

  @Input() restaurante: Restaurante;

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

  /**
  * Creates an reservation
  */
  createReserva(): ReservaDetail {

    let dateB: Date = new Date(this.reserva.fecha.year, this.reserva.fecha.month - 1, this.reserva.fecha.day);

    this.reserva.fecha = this.dp.transform(dateB, "yyyy-MM-dd'T'HH:mm:ss'Z[UTC]'");
    console.log(this.reserva);
    this.reserva.cliente = this.cliente;
    this.reserva.restaurante = this.restaurante;
    this.reserva.cancelada = false;
    this.reservaService.createReserva(this.reserva)
        .subscribe((reserva) => {
            this.reserva = reserva; 
            this.create.emit();
            this.toastrService.success("The reservation was created", "Reservation creation");
        });
    return this.reserva;
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
      this.reserva = new ReservaDetail();
  }

}

