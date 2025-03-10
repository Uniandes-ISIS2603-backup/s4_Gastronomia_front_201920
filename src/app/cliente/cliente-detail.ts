import { Cliente } from './cliente';
import { Tarjeta} from './tarjeta';
import {Factura } from '../factura/factura';
import {TipoComida} from '../tipo-comida/tipo-comida';

/**
* This class represents an client of FoodDive. 
* It contains all the information relevant to the client.
*/
export class ClienteDetail extends Cliente {

    //foodBlogs: FoodBlog[],
    preferencias: TipoComida[];
    facturas: Factura[];
    //reservas: Reserva[],
    tarjetas: Tarjeta[];


}