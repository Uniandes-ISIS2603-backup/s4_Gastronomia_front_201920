
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TarjetaService } from '../tarjeta.service';
import { Tarjeta } from '../tarjeta';
import { TarjetaDetail } from '../tarjeta-detail';


@Component({
  selector: 'app-tarjeta-detail',
  templateUrl: './tarjeta-detail.component.html'
})
export class TarjetaDetailComponent implements OnInit {

  constructor(
    private tarjetaService: TarjetaService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  @Input() tarjetaDetail: TarjetaDetail;



  /**
  * The editorial's id retrieved from the address
  */
  tarjeta_id: number;

  /**
  * The method which retrieves the books of an editorial
  */
  getTarjetaDetail(): void {
    this.tarjetaService.getTarjetaDetail(this.tarjeta_id)
      .subscribe(tarjetaDetail => {
        this.tarjetaDetail = tarjetaDetail
      });
  }

  /**
  * The method which initializes the component
  * We need to initialize the editorial so it is never considered as undefined
  */
  ngOnInit() {
    this.tarjeta_id = +this.route.snapshot.paramMap.get('id');
    if (this.tarjeta_id) {
      this.tarjetaDetail = new TarjetaDetail();
      this.getTarjetaDetail();
    }

  }

}