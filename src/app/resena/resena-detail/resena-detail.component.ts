import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import{Resena} from '../resena';
import {ResenaService} from '../resena.service';
import {ResenaDetail} from '../resena-detail';

@Component({
  selector: 'app-resena-detail',
  templateUrl: './resena-detail.component.html',
  styleUrls: ['./resena-detail.component.css']
})
export class ResenaDetailComponent implements OnInit {

  constructor
  (
    private resenaService:ResenaService,
    private route:ActivatedRoute
  ) { }

  resenaDetail:ResenaDetail;

  resena_id:number

  getResenaDetail(): void {
    this.resenaService.getResenaDetail(this.resena_id)
    .subscribe(resenaDetail => {this.resenaDetail = resenaDetail});

  }


  ngOnInit() 
  {
    this.resena_id = +this.route.snapshot.paramMap.get('id');
    this.resenaDetail = new ResenaDetail();
    this.getResenaDetail();
  }

}
