
import { Producto } from "./Producto.js";

/*
    Tipo: contundente, destreza, precisión

     .->> contundente > destreza > precisión >>-.
    /                                            \
    \____________________ < _____________________/


*/
export class Daga extends Producto{
    constructor(){
        super("daga", "epico", "imgs/Daga.png", 65000)

        this.tipo = "destreza";
        this.extra_ataque = 16;
    }
}

