import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import{ToastrService} from 'ngx-toastr';

import {FoodBlogService} from '../foodblog.service';

import{FoodBlog} from '../foodblog';

@Component({
  selector: 'app-foodblog-create',
  templateUrl: './foodblog-create.component.html',
  styleUrls: ['./foodblog-create.component.css']
})
export class FoodblogCreateComponent implements OnInit {

  constructor(
    private foodBlogService: FoodBlogService,
    private toastrService: ToastrService
  ) { }

  foodBlog:FoodBlog;

  @Output() cancel= new EventEmitter();

  @Output() create = new EventEmitter();

  createFoodBlog(): FoodBlog{
        this.foodBlogService.createFoodBlog(this.foodBlog).subscribe((foodBlog)=>{this.foodBlog=foodBlog
        this.create.emit();
        this.toastrService.success("Se creo el foodblog", "Creacion del foodBlogt");}
      , err  => {this.toastrService.error(err,"Error");});
      return this.foodBlog;
  }

  ngOnInit() 
  {
    this.foodBlog= new FoodBlog();
  }

}
