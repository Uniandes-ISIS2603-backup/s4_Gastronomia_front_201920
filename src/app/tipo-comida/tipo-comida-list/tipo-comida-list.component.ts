import { Component, OnInit , ViewContainerRef, Input} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { TipoComidaService } from '../tipo-comida.service';
import { TipoComida } from '../tipo-comida';

@Component({
  selector: 'app-tipo-comida-list',
  templateUrl: './tipo-comida-list.component.html',
  styleUrls: ['./tipo-comida-list.component.css']
})
export class TipoComidaListComponent implements OnInit {

 @Input() tipoComidas: TipoComida[];

 tipo_id:number;
 
 selectedFactura:TipoComida;

 showCreate: boolean;

 showEdit:boolean;

 showView: boolean;


  
   constructor(
    private tipoComidaService: TipoComidaService,
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) { }

    showHideCreate(): void {
      this.showView = false;
      this.showEdit = false;
      this.showCreate = !this.showCreate;
    }
  
    getFacturas() {
      this.tipoComidaService.getTipoComidas()
        .subscribe(tipoComidas => this.tipoComidas = tipoComidas);
    }
  
    ngOnInit() {
      this.showCreate = false;
      this.showView = false;
      this.showEdit = false;
      
      this.tipo_id = undefined;
      this.getFacturas();
    }
}






