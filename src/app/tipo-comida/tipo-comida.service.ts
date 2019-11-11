import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoComida } from './tipo-comida';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;

const tipoComidas = "/tipoComidas";
@Injectable()
export class TipoComidaService {

 /**
 * La lista de tipo comidas.
 */
tipoComidas: TipoComida[];

  /**
    * El constructor del servicio
    * @param http Necesario para hacer peticiones
    */
   constructor(private http: HttpClient) { }

   getTipoComidas(): Observable<TipoComida[]> {
    return this.http.get<TipoComida[]>(environment.apiURL + tipoComidas);
  }


  createTipoComida(tipoComida): Observable<TipoComida> {
   return this.http.post<TipoComida>(environment.apiURL + tipoComidas, tipoComida);
  }



}