import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Plato } from '../plato';
import { RestauranteService} from '../Restaurante.service';
import { Restaurante } from '../Restaurante';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-restaurante-editar-plato',
  templateUrl: './restaurante-editar-plato.component.html'

})
export class RestauranteEditarPlatoComponent implements OnInit {

  constructor(private restauranteService: RestauranteService,
    private router: Router,
    private toastrService: ToastrService) { }

    @Input() restaurante2: Restaurante;  
    plato: Plato;
    
    public isCollapsed = true;

   updatePlato(platoForm: NgForm): Plato
   {
        this.plato.restaurante = this.restaurante2;
        this.restauranteService.updatePlato(this.restaurante2.id, this.plato).subscribe(() =>
        {
            platoForm.reset();
            this.updatePlatos.emit();
            this.toastrService.success("Se actualizo el plato con exito");
            this.router.navigate(['/restaurantes/' + this.plato.restaurante.id]);
            this.isCollapsed = true;
        }, err =>
        {
           this.toastrService.error(err,'Error');
        }

        
        
        
        );
        return this.plato;
   }

    @Output() updatePlatos = new EventEmitter();

    ngOnInit() {
        this.plato = new Plato();
      }
    
      ngOnChanges(): void {
        this.ngOnInit();
      
      }

}