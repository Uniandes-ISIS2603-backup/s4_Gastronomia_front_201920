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

  descripcion:String;

  imagen:String;

  comentarios:String;

  @Output() cancel= new EventEmitter();

  @Output() create = new EventEmitter();

  createFoodBlog(): FoodBlog{
    this.foodBlog.comentarios=(<HTMLInputElement>document.getElementById("comment")).value;
    this.foodBlog.texto=this.descripcion;
    this.foodBlog.archivoMultimedia=this.imagen;
        this.foodBlogService.createFoodBlog(this.foodBlog).subscribe((foodBlog)=>{this.foodBlog=foodBlog
        this.create.emit();
        this.toastrService.success("Se creo el foodblog", "Creacion del foodBlog");}
      , err  => {this.toastrService.error(err,"Error");});
      
      return this.foodBlog;
  }
  cancelCreation  (): void {
    this.cancel.emit();
  }
  ngOnInit() 
  {
    this.foodBlog= new FoodBlog();
    this.foodBlog.numeroMeGusta=0;
    this.comentarios="";
    this.foodBlog.numeroNoMegusta=0;
    this.descripcion="";
    this.imagen="";
  }
  verifyDesc():void{
    let x =<HTMLInputElement>document.getElementById("texto");
    if(x.value=="" || x.value.trim()=="")
    {      
      x.style.backgroundColor="red";
    }
    else{
      x.style.backgroundColor="green";
      this.descripcion=x.value;
    }
  }
  verifyImg():void{
    let x =<HTMLInputElement>document.getElementById("imagen");
    if(x.value=="")
    {
      
      x.style.backgroundColor="red";
    }
    else{
      x.style.backgroundColor="green";
      this.imagen=x.value;

    }
  }
}
