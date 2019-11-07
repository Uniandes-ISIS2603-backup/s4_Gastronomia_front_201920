import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClienteDetail } from '../cliente-detail';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  clienteDetail : ClienteDetail;

  /**
    * The cliente's id retrieved from the address
    */
  cliente_id: number;

  getClienteDetail() : void {
    this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(clienteDetail => {
                this.clienteDetail = clienteDetail
            });

  }

  ngOnInit() {
    this.cliente_id = +this.route.snapshot.paramMap.get('id');
    if (this.cliente_id){
    this.clienteDetail = new ClienteDetail();
    this.getClienteDetail();
    }
  }

}
