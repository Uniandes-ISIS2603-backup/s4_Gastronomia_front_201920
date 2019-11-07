import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva } from './reserva';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const reservas = 'reservas.json';

@Injectable()
export class ReservaService {

 /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
   constructor(private http: HttpClient) { }
    
  
   getReservas() : Observable<Reserva[]> {
       return this.http.get<Reserva[]>(API_URL + reservas);
   }

}