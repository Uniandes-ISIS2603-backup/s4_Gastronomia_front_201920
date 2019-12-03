import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from './cliente';
import { ClienteDetail } from './cliente-detail';
import { Tarjeta } from './tarjeta';

import { environment } from '../../environments/environment';


const API_URL = environment.apiURL;
const clientes = '/clientes';
const tarjetas = '/tarjetas';

@Injectable()
export class ClienteService {

   /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getClientes() : Observable<Cliente[]> {
      return this.http.get<Cliente[]>(API_URL + clientes);
    }

    getClienteDetail(clienteId : number) : Observable<ClienteDetail> {
      return this.http.get<ClienteDetail>(API_URL + clientes + '/' + clienteId);
    }

    getClienteDetailByUsername(clienteUsername: string) : Observable<ClienteDetail> {
      return this.http.get<ClienteDetail>(API_URL + clientes + '/' + clienteUsername);
    }

   /**
    * Creates an client
    * @param cliente The new client
    * @returns The confirmation that the client was created
    */
    createCliente(cliente: Cliente): Observable<Cliente> {
      return this.http.post<Cliente>(API_URL + clientes, cliente);
    }


    createTarjeta(clienteId, tarjeta): Observable<Tarjeta>
    {
       return this.http.post<Tarjeta>(API_URL + clientes + '/' + clienteId + tarjetas, tarjeta);
    }
    updateTarjeta(clienteId, tarjeta): Observable<Tarjeta>
    {
        return this.http.put<Tarjeta>(API_URL + clientes + '/' + clienteId + tarjetas + '/' +  tarjeta.id, tarjeta);
    }
    deleteTarjeta(clienteId, tarjetaId)
    {
      return this.http.delete<ClienteDetail>(API_URL + clientes + '/' + clienteId + tarjetas + '/' + tarjetaId);
    }

}