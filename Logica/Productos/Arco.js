
import { Producto } from "./Producto.js";

/*
    Tipo: contundente, destreza, precisión

     .->> contundente > destreza > precisión >>-.
    /                                            \
    \____________________ < _____________________/


*/
export class Arco extends Producto{
    constructor(){
        super("Arco", "epico", "estilos/imgs/Arco.webp", 76000);

        this.tipo = "precision";
        this.extra_ataque = 16;
    }
}

