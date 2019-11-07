import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Tarjeta } from '../tarjeta';
import { TarjetaDetailComponent } from '../tarjeta-detail/tarjeta-detail.component';
import { TarjetaDetail } from '../tarjeta-detail';
import { TarjetaService } from '../tarjeta.service';

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
   selector: 'tarjeta-list',
  templateUrl: './tarjeta-list.component.html',
  styleUrls: ['./tarjeta-list.component.css']
})
export class TarjetaListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param editorialService The author's services provider
     */
    constructor(private tarjetaService: TarjetaService, private router: Router) { }

    tarjeta_id: number;
    selectedTarjeta: TarjetaDetail;
    
    /**
     * The list of editorials which belong to the BookStore
     */
    tarjetas: Tarjeta[];

    /**
     * Asks the service to update the list of editorials
     */
    getTarjetas(): void {
       this.tarjetaService.getTarjetas().subscribe(tarjetas => this.tarjetas = tarjetas);
    }

    onSelected(tarjeta_id: number): void
    {
      this.tarjeta_id = tarjeta_id;
      this.selectedTarjeta = new TarjetaDetail();
      this.tarjetaService.getTarjetaDetail(tarjeta_id).subscribe(o => this.selectedTarjeta = o);
    }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getTarjetas();
    }
}