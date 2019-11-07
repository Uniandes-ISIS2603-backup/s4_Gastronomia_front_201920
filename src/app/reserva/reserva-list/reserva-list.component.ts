import { Component, OnInit } from '@angular/core';
import { Reserva } from '../reserva'
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param reservaService The client's services provider
   */
  constructor(private reservaService: ReservaService) { }
  
  /**
   * The list of clients which belong to FoodDive
   */
  reservas: Reserva[];

  /**
   * Asks the service to update the list of clients
   */
  getReservas(): void {
      this.reservaService.getReservas().subscribe(reservas => this.reservas = reservas);
  }

  ngOnInit() {
    this.getReservas();
  }

}
