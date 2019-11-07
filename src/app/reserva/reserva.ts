/**
* This class represents an reservation of FoodDive. 
* It contains all the information relevant to the reservation.
*/
export class Reserva {
    id: number;
    motivo: string;
    fecha: any;
    numPersonas: number;
    nombreCliente: string;
    numeroContacto: string;
    cancelada: boolean;
}