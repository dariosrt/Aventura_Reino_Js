import { Entidad } from "./Entidad.js";
import { Frasco } from "../Productos/Frasco.js";
import { Arco } from "../Productos/Arco.js";
import { Hacha } from "../Productos/Hacha.js";
import { Daga } from "../Productos/Daga.js";
import { Espada_rota } from "../Productos/Espada_rota.js";
import { Pocion_vida } from "../Productos/Pocion_Vida.js";

export class Enemigo extends Entidad{
    constructor(nombre, vida, ataque, defensa, avatar){
        super(nombre, vida, ataque, defensa, avatar);
        
    }

    atacado(daño){
        if(this.vida < daño){
            this.vida = 0;
        }
        else{
            this.vida = (this.vida + this.defensa) - daño
        }
    }
}