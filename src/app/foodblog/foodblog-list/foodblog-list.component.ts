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
foodBlogs: FoodBlog[] ;

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
