import { Component, OnInit } from '@angular/core';
import {ActivatedRoute  } from '@angular/router';

import {FoodBlogService} from '../foodblog.service';
import{FoodBlog} from '../foodblog';
import{FoodBlogDetail} from '../foodblog-detail';

@Component({
  selector: 'app-foodblog-detail',
  templateUrl: './foodblog-detail.component.html',
  styleUrls: ['./foodblog-detail.component.css']
})
export class FoodblogDetailComponent implements OnInit {

  
  constructor(
    private foodBlogService: FoodBlogService,
  private route: ActivatedRoute
  ) { }

  foodBLogDetail: FoodBlogDetail;


  foodblog_id:number;

  

  getFoodBlogDetail():void{
    this.foodBlogService.getFoodBlogDetail(this.foodblog_id).subscribe(foodBLogDetail => {this.foodBLogDetail=foodBLogDetail});
  }
  ngOnInit() {
    this.foodblog_id=+ this.route.snapshot.paramMap.get('id');
    this.foodBLogDetail=new FoodBlogDetail();
    this.getFoodBlogDetail();
  }

  

}
