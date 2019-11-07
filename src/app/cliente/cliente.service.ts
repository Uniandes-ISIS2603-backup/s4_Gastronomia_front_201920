import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cliente } from './cliente';
import { ClienteDetail } from './cliente-detail';


const API_URL = "../../assets/";
const clientes = 'clientes.json';

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

    getClienteDetail(id : number) : Observable<ClienteDetail> {
       return this.http.get<ClienteDetail>(API_URL + 'cliente' + id + '.json');
    }

   /**
    * Creates an client
    * @param cliente The new client
    * @returns The confirmation that the client was created
    */
    createCliente(cliente): Observable<Cliente> {
        return this.http.post<Cliente>(API_URL + clientes, cliente);
    }

}