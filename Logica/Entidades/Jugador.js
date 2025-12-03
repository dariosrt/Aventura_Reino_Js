import { Frasco } from "../Productos/Frasco.js";
import { Arco } from "../Productos/Arco.js";
import { Hacha } from "../Productos/Hacha.js";
import { Daga } from "../Productos/Daga.js";
import { Espada_rota } from "../Productos/Espada_rota.js";
import { Pocion_vida } from "../Productos/Pocion_Vida.js";
import { Entidad } from "./Entidad.js";
import { Producto } from "../Productos/Producto.js";
/*
    Dependiendo de que tipo de arma se 

    La alomancia se obtiene al derrotar enemigos o consumir frascos de metales.
    Algunos metales como el atium solo se obtienen por su compra en la tienda

    Atium = el metal mas escaso y caro
    
*/
export class Jugador extends Entidad{
    constructor(lenght){
        super();
        this.nombre = "Solaire";
        this.vida = 10;
        this.max_vida = this.vida;
        this.ataque = 60;
        this.defensa = 20;
        this.avatar = "estilos/imgs/protagonista_temporal.avif";
        this.reserva_metales = [0, 0, 0, 0, 0];
        this.puntos = 0;
        this.dinero = 2000000;
        this.inventario = new Array(10).fill(null);
        this.inventario[0] = new Espada_rota();
        this.arma = 0;  /* El arma hace referencia a la posición del inventario  */
        
        this.hueco_inventario = 9;

    }

    curarse(){
        let cura = 40;
        if(cura+this.vida >= this.max_vida){
            this.vida = this.max_vida;
        }
        else{
            this.vida+=curacion;
        }
    }

    restaurar_hueco_inventario(){
        this.hueco_inventario = this.inventario.filter(item => item === null).length;
    }

    agregar_objeto(objeto) {
        const posicion = this.inventario.indexOf(null);
        this.inventario[posicion] = objeto;

    }

    atacado(daño){
        if(this.vida + this.defensa - daño <= 0){
            this.vida = 0;
        }
        else if(this.defensa >= daño){
            return
        }
        else{
            this.vida = (this.vida + this.defensa) - daño;
        }
    }
    atacar(){
        if(this.inventario[this.arma] instanceof Producto){
            return this.ataque + this.inventario[this.arma].extra_ataque;
        }
        else{
            return this.ataque;
        }
    }

    img_arma(){
        let img_arma = this.inventario[this.arma].img
        if(!img_arma){
            return "";
        }
        else{
            return img_arma;
        }
    }
    
}
