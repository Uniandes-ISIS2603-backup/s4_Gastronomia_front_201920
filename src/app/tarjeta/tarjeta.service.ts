import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarjeta } from './tarjeta';
import { TarjetaDetail } from './tarjeta-detail';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;

const tarjetas = '/tarjetas';

@Injectable()
export class TarjetaService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }    
  
    getTarjetas() : Observable<Tarjeta[]> {
        return this.http.get<Tarjeta[]>(API_URL + tarjetas);
    }
    
     
    getTarjetaDetail(tarjetaId): Observable<TarjetaDetail> {
        return this.http.get<TarjetaDetail>(API_URL + tarjetas + '/' + tarjetaId);
    }

    createTarjeta(tarjeta): Observable<TarjetaDetail>
    {
        return this.http.post<TarjetaDetail>(API_URL + tarjetas, tarjeta); 
    }
}