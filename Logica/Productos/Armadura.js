import { Producto } from "./Producto.js";


export class Armadura extends Producto {

    constructor(nombre, rareza, img, tipo, extra_defensa){
      super(nombre, rareza, img,);
      this.tipo = tipo;
      this.extra_defensa = extra_defensa;
    }
}