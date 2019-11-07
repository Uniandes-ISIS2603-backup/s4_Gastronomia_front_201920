import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente'
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param clienteService The client's services provider
   */
  constructor(private clienteService: ClienteService) { }
  
  /**
   * The list of clients which belong to FoodDive
   */
  clientes: Cliente[];

  /**
   * Asks the service to update the list of clients
   */
  getClientes(): void {
      this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
  }

  ngOnInit() {
    this.getClientes();
  }

}
