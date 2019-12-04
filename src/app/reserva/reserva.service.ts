import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reserva} from './reserva';
import { ReservaDetail } from './reserva-detail';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const reservas = '/reservas';

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

    getReservaDetail(reservaId: number) : Observable<ReservaDetail> {
       return this.http.get<ReservaDetail>(API_URL + + reservas + '/' + reservaId)
    }

   /**
    * Creates an reservation
    * @param reserva The new reservation
    * @returns The confirmation that the reservation was created
    */
    createReserva(reserva : ReservaDetail): Observable<ReservaDetail> {
        return this.http.post<ReservaDetail>(API_URL + reservas, reserva);
    }

}