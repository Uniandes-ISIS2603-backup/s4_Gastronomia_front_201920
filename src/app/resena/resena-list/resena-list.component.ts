import { Component, OnInit, ViewContainerRef } from '@angular/core';
import{ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import{ToastrService} from 'ngx-toastr';

import{Resena} from '../resena';
import {ResenaService} from '../resena.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-resena',
  templateUrl: './resena-list.component.html',
  styleUrls: ['./resena-list.component.css']
})
export class ResenaListComponent implements OnInit {

  constructor(
        private resenaService:ResenaService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }

        resenas:Resena[];

        showCreate:boolean;

        showEdit:boolean;

        resena_edit_id:number;

        getResenas():void
       {
          this.resenaService.getResenas().subscribe(resenas => { this.resenas = resenas;});
        }

          /**
    * Shows or hides the create component
    */
    showHideCreate(): void
     {
      this.showEdit = false;
      this.showCreate = !this.showCreate!
      }

      /**
      * Shows or hides the create component
      */
      showHideEdit(resena_id: number): void {
          if (!this.showEdit || (this.showEdit && resena_id != this.resena_edit_id)) {
              this.showCreate = false;
              this.showEdit = true;
              this.resena_edit_id = resena_id;
          }
          else {
              this.showEdit = false;
          }
      }
  ngOnInit() 
  {
        this.showCreate = false;
        this.showEdit = false;
        this.getResenas();
  }

}
