import {Component, OnInit, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

import {RestauranteService} from '../Restaurante.service';
import {ReservaService} from '../../reserva/reserva.service';
import {AdministradorService} from '../../administrador/administrador.service';

import {RestauranteDetail} from '../restaurante-Detail';
import {Reserva} from '../../reserva/reserva';
import {Plato} from '../plato';
import { Restaurante } from '../Restaurante';

@Component({
  selector: 'app-restaurante-edit',
  templateUrl: './restaurante-edit.component.html',
  styleUrls: ['./restaurante-edit.component.css']
})
export class RestauranteEditComponent implements OnInit {

  constructor(
    private dp: DatePipe,
    private restauranteService: RestauranteService,
    private administradorService: AdministradorService,
    private reservaService: ReservaService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
) {}

model: any;
/**
* The book which will be updated
*/
restaurante: RestauranteDetail

id: number;
/**
* The list of every author in the BookStore
*/
reservas: Reserva[];

/**
* The list of every editorial in the BookStore
*/
platos: Plato[];

@ViewChild('instance') instance: NgbTypeahead;
focus$ = new Subject<string>();
click$ = new Subject<string>();

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    //this.getBook();
    //this.getEditorials();
    //this.getAuthors();
    this.model = new Restaurante();
  }

}