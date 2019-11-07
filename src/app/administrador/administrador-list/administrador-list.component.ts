import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { AdministradorService } from '../administrador.service';
import { Administrador } from '../administrador'
@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

  
administradores: Administrador[];
administrador_id:number;
selectedAdministrador:Administrador;


   /**
  * Muestra o esconde el componente fichatecnica-create-component
  */
 showCreate: boolean;

 showEdit:boolean;
 /**
   * Muestra o esconde el detalle de una a ficha tecnica
   */
  showView: boolean;

  /**
    * Constructor para el componente
    * @param administradorService El proveedor del servicio administrador
    */
   constructor(private administradorService: AdministradorService, private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService) { }

  /**
    * Muestra o esconde el componente de crear un cliente
    * 
    * */
   showHideCreate(): void {
    this.showView = false;
    this.showEdit = false;
    this.showCreate = !this.showCreate;
  }

  getAdministradores() {
    this.administradorService.getAdministradores()
      .subscribe(administradores => this.administradores = administradores);
  }

  ngOnInit() {
    this.showCreate = false;
    this.showView = false;
    this.showEdit = false;
    
    this.administrador_id = undefined;
    this.getAdministradores();
  }


}