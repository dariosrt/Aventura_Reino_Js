
import { Entidad } from "./Entidad.js";
/*
    Dependiendo de que tipo de arma se 

    La alomancia se obtiene al derrotar enemigos o consumir frascos de metales.
    Algunos metales como el atium solo se obtienen por su compra en la tienda

    Atium = el metal mas escaso y caro
    
*/
export class Jugador extends Entidad{
    constructor(lenght){
        super();
        this.nombre = "Protagonista";
        this.vida = 100
        this.max_vida = this.vida;
        this.ataque = 60;
        this.defensa = 50;
        this.avatar = "estilos/imgs/protagonista_temporal.avif";
        this.reserva_metales = [0, 0, 0, 0, 0];
        this.dinero = 0;
        this.inventario = [];

    }

    
}
