import { Reserva } from './reserva';
import { Cliente } from '../cliente/cliente';
import { Restaurante } from '../Restaurante/Restaurante';
import { Factura } from '../factura/factura';
import { Resena } from '../resena/resena';

export class ReservaDetail extends Reserva {
    cliente: Cliente;
    restaurante: Restaurante;
    factura: Factura;
    resena: Resena;
}