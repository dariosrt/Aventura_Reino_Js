import { Frasco } from "../Productos/Frasco.js";
import { Arco } from "../Productos/Arco.js";
import { Hacha } from "../Productos/Hacha.js";
import { Daga } from "../Productos/Daga.js";
import { Espada_rota } from "../Productos/Espada_rota.js";
import { Pocion_vida } from "../Productos/Pocion_Vida.js";



export class Entidad{
    // constructor(nombre, vida, ataque, defensa, avatar){
    //     this.nombre = nombre;
    //     this.vida = vida
    //     this.max_vida = vida;
    //     this.ataque = ataque;
    //     this.defensa = defensa;
    //     this.avatar = avatar;
    //     this.reserva_metales = [0, 0, 0, 0, 0];
    // }

    constructor(nombre, vida, ataque, defensa, avatar){
        this.nombre=nombre;
        this.vida=vida;
        this.ataque=ataque;
        this.defensa=defensa;
        this.avatar=avatar;
    }



}
