import { Enemigo } from "./Enemigo.js";


export class Jefe extends Enemigo{
    constructor(nombre, vida, ataque, defensa, avatar, tipo, multiplicador_ataque){
        super(nombre, vida, ataque, defensa, avatar, tipo);
        this.multiplicador_ataque = multiplicador_ataque;
    }

    // constructor(nomrbe){
    //     if(nombre === "jefe_contundente"){

    //     }
    //     else if(nombre === "jefe_destreza"){

    //     }
    // }
}
