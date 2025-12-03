
import { Producto } from "./Producto.js";


export class Pocion_vida extends Producto{
    constructor(){
        super("Pocion_vida", "raro", "estilos/imgs/Pocion_Vida.png", 8000);

        this.puntos_vida = 40;
    }
}