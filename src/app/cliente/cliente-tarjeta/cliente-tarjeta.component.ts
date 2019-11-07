import { Component, OnInit, Input, } from '@angular/core';
import { Tarjeta } from '../tarjeta';

@Component({
  selector: 'app-cliente-tarjeta',
  templateUrl: './cliente-tarjeta.component.html',
  styleUrls: ['./cliente-tarjeta.component.css']
})
export class ClienteTarjetaComponent implements OnInit {


 @Input() clienteTarjetas : Tarjeta [];

 updateTarjetas(tarjetas:Tarjeta[]): void {
        this.clienteTarjetas = tarjetas;
    }

 public isCollapsed = false;
  ngOnInit() {
  }

}