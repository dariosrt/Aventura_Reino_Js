
import { Producto } from "./Producto.js";

/*
    Tipo: contundente, destreza, precisión

     .->> contundente > destreza > precisión >>-.
    /                                            \
    \____________________ < _____________________/


*/
export class Hacha extends Producto{
    constructor(){
        super("Hacha", "epico", "estilos/imgs/Hacha.png", 90000);

        this.tipo = "contundente";
        this.extra_ataque = 16;
    }
}
