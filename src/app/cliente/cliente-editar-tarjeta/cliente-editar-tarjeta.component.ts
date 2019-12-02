import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import {Tarjeta} from '../tarjeta';
import {ClienteService} from '../cliente.service';
import{Cliente} from '../cliente';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-cliente-editar-tarjeta',
  templateUrl: './cliente-editar-tarjeta.component.html'
})
export class ClienteEditarTarjetaComponent implements OnInit {

  navigationSubscription;
  constructor(private clienteService: ClienteService,
    private router: Router,
    private toastrService: ToastrService
    ) {

      this.navigationSubscription = this.router.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
            this.ngOnInit();
        }
    });
     }

    @Input() cliente2: Cliente;

    tarjeta: Tarjeta;

    public isCollapsed = true;

    @Output() updatePlatos = new EventEmitter();

    updateTarjeta(f: NgForm): Tarjeta
    {
         this.tarjeta.cliente = this.cliente2;
         this.clienteService.updateTarjeta(this.cliente2.id, this.tarjeta).subscribe(() =>
         {
             f.reset();
             this.updatePlatos.emit();
             this.toastrService.success("Se actualizo la tarjeta con exito");
             this.router.navigate(['/clientes/' + this.cliente2.id]);
             this.isCollapsed = true;
         }, err =>
         {
            this.toastrService.error(err,'Error');
         }
 
         
         
         
         );
         return this.tarjeta;
    }

    ngOnInit() {
        this.tarjeta = new Tarjeta();
      }
    
      ngOnChanges(): void {
        this.ngOnInit();
      
      }

}