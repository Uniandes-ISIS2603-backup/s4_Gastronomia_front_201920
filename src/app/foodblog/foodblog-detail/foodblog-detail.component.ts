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

  blogs: FoodBlog[]=[
    {archivoMultimedia:"https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/59f6f86d5bafe8699bf7fdf3/segundosinterior.jpg",
  texto:"#pollos",
  comentarios:"Excelente restaurante muy rico",
  numeroMeGusta: 10,
  numeroNoMeGusta:2},
  {archivoMultimedia:"https://images.ctfassets.net/sd2voc54sjgs/2WlveeO7lCi862USkSWiom/69c078a6ec1e9e8c2ed37274284475e1/CL-x_platos_de_comida_ti__pica_peruana_que_no_son_so__lo_ceviche.jpg",
  texto:"14 mesa",
  comentarios:"Excelente servicio",
  numeroMeGusta: 100,
  numeroNoMeGusta:5},
  {archivoMultimedia:"https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg",
  texto:"",
  comentarios:"",
  numeroMeGusta: 20,
  numeroNoMeGusta:2},
  {archivoMultimedia:"https://steemitimages.com/DQmaWmSP5wWjM7XMGiERruw5K7GnecxZDDZUo9RCeBykb7L/spa.png",
  texto:"Don jediondo",
  comentarios:"Que buen chimichurri",
  numeroMeGusta: 10,
  numeroNoMeGusta:0},
  {archivoMultimedia:"https://peru.info/Portals/0/Images/Productos/6/32-imagen-9392211122017.jpg",
  texto:"La mejorpasta de la vida",
  comentarios:"muy rico tod buen precio",
  numeroMeGusta: 8,
  numeroNoMeGusta:1}
  ];

  getFoodBlogs(): void {
    this.foodBlogService.getFoodBLogs()
    .subscribe(blogs => {this.blogs =this.blogs});
  }

  getFoodBlogDetail():void{
    this.foodBlogService.getFoodBlogDetail(this.foodblog_id).subscribe(foodBLogDetail => {this.foodBLogDetail=foodBLogDetail});
  }
  ngOnInit() {
    this.foodblog_id=+ this.route.snapshot.paramMap.get('id');
    this.foodBLogDetail=new FoodBlogDetail();
    this.getFoodBlogDetail();
  }

}
