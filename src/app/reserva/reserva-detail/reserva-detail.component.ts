import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ReservaDetail } from '../reserva-detail';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reserva-detail',
  templateUrl: './reserva-detail.component.html',
  styleUrls: ['./reserva-detail.component.css']
})
export class ReservaDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private reservaService: ReservaService
  ) { }

  reservaDetail : ReservaDetail;

  reserva_id: number;

  getReservaDetail() : void {
    this.reservaService.getReservaDetail(this.reserva_id)
            .subscribe(reservaDetail => {
                this.reservaDetail = reservaDetail
            });

  }

  ngOnInit() {
    this.reserva_id = +this.route.snapshot.paramMap.get('id');
    if (this.reserva_id){
    this.reservaDetail = new ReservaDetail();
    this.getReservaDetail();
    }
  }

}
