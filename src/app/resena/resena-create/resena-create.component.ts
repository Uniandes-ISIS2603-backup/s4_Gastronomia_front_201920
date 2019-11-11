import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import {ToastrService} from 'ngx-toastr';

import {ResenaService} from '../resena.service';

import {Resena} from '../resena';

@Component({
  selector: 'app-resena-create',
  templateUrl: './resena-create.component.html',
  styleUrls: ['./resena-create.component.css']
})
export class ResenaCreateComponent implements OnInit {

  constructor(
    private resenaService: ResenaService,
    private toastrService: ToastrService
  ) { }

  resena:Resena;

  @Output() cancel= new EventEmitter();

  @Output() create = new EventEmitter();

  createResena(): Resena
  {
       this.resenaService.createResena(this.resena)
       .subscribe(resena => {
       this.resena = resena;
       this.create.emit();
       this.toastrService.success("La resena fue creada", "Creacion de la resena"); },
       err=>{
      this.toastrService.error(err,"Error");
    });
    return this.resena;
  }

  cancelCreation():void
  {
      this.cancel.emit();
  }

  ngOnInit()
  {
    this.resena = new Resena();
  }

}
