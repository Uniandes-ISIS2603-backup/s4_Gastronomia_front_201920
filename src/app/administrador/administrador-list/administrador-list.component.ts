import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { AdministradorService } from '../administrador.service';
import { Administrador } from '../administrador'
import { AdministradorDetail } from '../administrador-detail';
@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})

/**
     Angela Suarez.
 */
export class AdministradorListComponent implements OnInit {

  
administradores: Administrador[];
administradorId:number;
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

    onSelected(administradorId: number):void {
      this.showCreate = false;
     
      this.showView = true;
      this.administradorId = administradorId;
      this.selectedAdministrador = new AdministradorDetail();
      this.getAdministradorDetail();
  
    }
  /**
    * Muestra o esconde el componente de crear un cliente
    * 
    * */
   showHideCreate(): void {
    this.showView = false;
    this.showEdit = false;
    this.showCreate = !this.showCreate;
  }

  /**
      * Shows or hides the create component
      */
     showHideEdit(administradorId: number): void {
      if (!this.showEdit || (this.showEdit && administradorId != this.selectedAdministrador.id)) {
        this.showView = false;
        this.showCreate = false;
        this.showEdit = true;
        this.administradorId = administradorId;
        this.selectedAdministrador= new Administrador();
        this.getAdministradorDetail();
      }
      else {
        this.showEdit = false;
        this.showView = true;
      }
    }

  getAdministradores() {
    this.administradorService.getAdministradores()
      .subscribe(administradores => this.administradores = administradores);
  }

  getAdministradorDetail(): void {
    this.administradorService.getAdministradorDetail(this.administradorId)
        .subscribe(selectedAdministrador => {
            this.selectedAdministrador = selectedAdministrador;
        });
}
  ngOnInit() {
    this.showCreate = false;
    this.showView = false;
    this.showEdit = false;
    
    this.administradorId = undefined;
    this.getAdministradores();
  }


}