import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from './administrador';
import { HttpClient } from '@angular/common/http';
import { AdministradorDetail } from './administrador-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;

const administradores = "/administrador";

/**
     Angela Suarez.
 */

@Injectable()
export class AdministradorService {

 /**
 * La lista de administradores.
 */
administradores: Administrador[];

  /**
    * El constructor del servicio
    * @param http Necesario para hacer peticiones
    */
   constructor(private http: HttpClient) { }

   getAdministradores(): Observable<Administrador[]> {
    return this.http.get<Administrador[]>(environment.apiURL + administradores);
  }

  getAdministradorDetail(administradorId): Observable<AdministradorDetail> {
    return this.http.get<AdministradorDetail>(environment.apiURL + administradores + '/' + administradorId);
    
  }

  
  

  
  createAdministrador(administrador): Observable<Administrador> {
   return this.http.post<Administrador>(environment.apiURL + administradores, administrador);
  }

  /**
     * Updates an author
     * @param author The author's information updated
     * @returns The confirmation that the author was updated
     */
    // updateAdministrador(administrador): Observable<AdministradorDetail> {
   // return this.http.put<AdministradorDetail>(environment.apiURL + administradores + '/' + administrador.id, administrador);
  //}

  /**
  * Deletes an author from the BookStore
  * @param authorId The id of the author
  * @returns The confirmation that the author was deleted
  */
  //deleteAdministrador(administradorId): Observable<boolean> {
   // return this.http.delete<boolean>(environment.apiURL + administradores + '/' + administradorId);
 //  }

}