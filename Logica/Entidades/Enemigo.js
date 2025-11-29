import { Entidad } from "./Entidad.js";


export class Enemigo extends Entidad{
    constructor(nombre, vida, ataque, defensa, avatar, tipo){
        super(nombre, vida, ataque, defensa, avatar);
        this.tipo = tipo;
        
    }
}