export class Restaurante
{
    /**
     * Identificador del restaurante
     */
    id:Number;
    /**
     * nombre del restaurante
     */
    nombre:String;
    /**
     * contraseña del restaurante
     */
    contrasena:String;
    /**
     * direccion del restaurnate
     */
    direccion:String;
    /**
     * el tipo derestaurante
     */
    tipoRestaurante:String;
    /**
     * el precio por persona 
     */
    precioPorPersona:Number;
    /**
     * los servicios eextras
     */
    descuentaoCumpleanos:Boolean;
    zonaDeFumadores:Boolean;
    petFriendly:Boolean;
    servicioALaMesa:Boolean;
    musicaEnVivo:Boolean;
    /**
     * el costo de reserva
     */
    costoReserva:Number;
    /**
     * el horario
     */
    horario:any;

    imagen: String;

}