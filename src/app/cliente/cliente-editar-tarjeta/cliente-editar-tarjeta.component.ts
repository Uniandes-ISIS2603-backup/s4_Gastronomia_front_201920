import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import {Tarjeta} from '../tarjeta';
import {ClienteService} from '../cliente.service';
import{Cliente} from '../cliente';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-cliente-editar-tarjeta',
  templateUrl: './cliente-editar-tarjeta.component.html',
  providers: [DatePipe]
})
export class ClienteEditarTarjetaComponent implements OnInit, OnChanges {

  navigationSubscription;
  constructor(private clienteService: ClienteService,
    private dp: DatePipe,
    private router: Router,
    private toastrService: ToastrService
    ) {
     }

    @Input() cliente2: Cliente;

    tarjeta: Tarjeta;

    public isCollapsed = true;

    
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

    updateTarjeta(f: NgForm): Tarjeta
    {
      let dateB: Date = new Date(this.tarjeta.fechaVencimiento.year, this.tarjeta.fechaVencimiento.month - 1, this.tarjeta.fechaVencimiento.day);

      this.tarjeta.fechaVencimiento = this.dp.transform(dateB, "yyyy-MM-dd'T'HH:mm:ss'Z[UTC]'");
      this.tarjeta.cliente = this.cliente2;
      this.clienteService.updateTarjeta(this.cliente2.id, this.tarjeta).subscribe(() =>
      
      {
        
        f.reset();
        this.updateTarjetas.emit();
        this.create.emit();
        this.router.navigate(['/clientes/' + this.cliente2.id]);
        this.isCollapsed = true;
        this.toastrService.success("Se actualizo la tarjeta existosamente");

      }, err => 
      {
        this.toastrService.error(err,'Error');
      });
      return this.tarjeta;
    }

    @Output() updateTarjetas = new EventEmitter();

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