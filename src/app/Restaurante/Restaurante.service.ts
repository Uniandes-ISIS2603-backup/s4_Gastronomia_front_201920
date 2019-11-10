import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from './Restaurante';
import { HttpClient } from '@angular/common/http';
import { RestauranteDetail } from './Restaurante-Detail';
import {Plato} from './plato';



import { environment } from '../../environments/environment';

const API_URL=environment.apiURL;
const restaurantes="/restaurantes";
const platos = '/platos';

@Injectable()
export class RestauranteService
{
    constructor(private http:HttpClient){}

    getRestaurantes():Observable<Restaurante[]>
    {
        return this.http.get<Restaurante[]>(API_URL+restaurantes);
    }
    createRestaurante(restaurante):Observable<Restaurante>
    {
        return this.http.post<Restaurante>(API_URL+restaurantes,restaurante);
    }
    getRestauranteDetail(id):Observable<RestauranteDetail>
    {
        return this.http.get<RestauranteDetail>(API_URL+restaurantes+'/'+id);        
    }
    updateRestaurante(restaurante):Observable<RestauranteDetail>
    {
        return this.http.put<RestauranteDetail>(API_URL + restaurantes + '/' + restaurante.id, restaurante);
    }
    deleteRestaurante(id): Observable<RestauranteDetail>
    {
        return this.http.delete<RestauranteDetail>(API_URL + restaurantes + '/' + id);
    }
    createPlato(restauranteId, plato) : Observable<Plato>
    {
     return this.http.post<Plato>(API_URL + restaurantes + '/' + restauranteId + platos, plato);
    }
}