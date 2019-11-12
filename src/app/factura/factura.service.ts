import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from './factura';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;

const facturas = "/facturas";
@Injectable()
export class FacturaService {

 /**
 * La lista de facturas.
 */
 facturas: Factura[];

  /**
    * El constructor del servicio
    * @param http Necesario para hacer peticiones
    */
   constructor(private http: HttpClient) { }

   getFacturas(): Observable<Factura[]> {
    return this.http.get<Factura[]>(environment.apiURL + facturas);
  }


  createFactura(factura): Observable<Factura> {
   return this.http.post<Factura>(environment.apiURL + facturas, factura);
  }

 
    updateFactura(factura): Observable<Factura> {
        return this.http.put<Factura>(environment.apiURL + facturas + '/' + factura.id, factura);
      }
    
     
      
      deleteFactura(facturasId): Observable<boolean> {
       return this.http.delete<boolean>(environment.apiURL + facturas + '/' + facturasId);
      }

}