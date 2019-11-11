import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Resena } from './resena';
import { ResenaDetail } from './resena-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const resenas = '/resenas';

@Injectable()
export class ResenaService
{


    constructor(private http: HttpClient){}

    getResenas(): Observable<Resena[]> {
        return this.http.get<Resena[]>(API_URL+resenas);
    }

    getResenaDetail(resenaId): Observable<ResenaDetail>
    {
        return this.http.get<ResenaDetail>(API_URL+resenas+'/'+ resenaId);
    }

    createResena(resena): Observable <Resena>
    {
        return this.http.post<Resena>(API_URL+resenas,resena);
    }
    

}