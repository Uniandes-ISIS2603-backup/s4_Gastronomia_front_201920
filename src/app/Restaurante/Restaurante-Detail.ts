import {Restaurante} from './Restaurante';
import {Administrador} from '../administrador/administrador';
import { Plato } from './plato';
export class RestauranteDetail extends Restaurante
{
    administrador: Administrador;
    platos: Plato[];
}