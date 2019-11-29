

export class FoodBlog{
    id:Number;
    /**
     * La descripcion del foodblog
     */
    texto:String;
    /**
     * La foto de la comida documentada
     */
    archivoMultimedia:String;
    /**
     * EL numero de me gusta que tiene esa entrada del blog
     */
    numeroMeGusta:Number;
   /**
    * El numero de no me gusta que tiene la entrada
    */
   numeroNoMegusta:Number;
    /**
     * Los comentarios que tiene el foodblog
     */
    comentarios:String;
}