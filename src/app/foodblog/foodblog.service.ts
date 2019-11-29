import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import{FoodBlog} from './foodblog';
import {FoodBlogDetail} from './foodblog-detail';

import{ environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const foodblogs = '/foodBlogs';

@Injectable()
export class FoodBlogService
{

/**
 * Construye un foodblog dada una ruta desde donde se carga 
 * @param http 
 */
constructor(private http: HttpClient){}

/**
 * Obtiene todos los foodblogs cargados para despues poder desplegarlos
 */
getFoodBLogs(): Observable<FoodBlog[]>{
    return this.http.get<FoodBlog[]>(API_URL+foodblogs);
}

/**
 * 
 * @param foodBlogId Obtien el detalle de un foodblog
 */
getFoodBlogDetail(foodBlogId): Observable<FoodBlogDetail> {
    return this.http.get<FoodBlogDetail>(API_URL + foodblogs + '/' + foodBlogId);
}
/**
 * RServicio de creacion de un foodblog
 * @param foodblog 
 */
createFoodBlog(foodblog): Observable<FoodBlog>{
    return this.http.post<FoodBlog>(API_URL + foodblogs, foodblog);
}

}