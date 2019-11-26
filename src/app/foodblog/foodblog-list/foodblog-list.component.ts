import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { FoodBlogService } from '../foodblog.service';
import { ToastrService } from 'ngx-toastr';
import { FoodBlog } from '../foodblog';
import { FoodblogDetailComponent } from '../foodblog-detail/foodblog-detail.component';

@Component({
  selector: 'app-foodblog',
  templateUrl: './foodblog-list.component.html',
  styleUrls: ['./foodblog-list.component.css']
})
export class FoodblogListComponent implements OnInit {

  constructor(
    private foodBlogService: FoodBlogService,
    private modalDialogService: ModalDialogService,
    private viewref: ViewContainerRef,
    private toastrService:ToastrService
  ) { }

  /**
   * Arreglo de los foodblogs que se van a desplegar
   */
foodBlogs: FoodBlog[]=[
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
  
 ;

/**
    * Shows or hides the create component
    */
   showCreate: boolean;

   /**S
    * Shows or hides the edit component.
    */
   showEdit: boolean;

   /**
    * The id of the editorial being edited.
    */
   foodBlog_edit_id: number;

   /**
    * Para actualizar la lista de los foodblogs
    */
    getFoodBlogs(): void {
      this.foodBlogService.getFoodBLogs()
      .subscribe(foodBlogs => {this.foodBlogs =this.foodBlogs});
    }

    // getFoodBlogDetail():

    /**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate!
    }

     /**
    * Shows or hides the create component
    */
   showHideEdit(foodblog_id: number): void
    {
        if (!this.showEdit || (this.showEdit && foodblog_id != this.foodBlog_edit_id)) 
        {
            this.showCreate = false;
            this.showEdit = true;
            this.foodBlog_edit_id = foodblog_id;
        }
        else 
        {
            this.showEdit = false;
        }
    }


    


  ngOnInit()
   {
      this.showCreate = false;
          this.showEdit = false;
          this.getFoodBlogs();
          console.log("BAbato");
  }

}
