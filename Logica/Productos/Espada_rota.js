
import { Producto } from "./Producto.js";

/*
    Tipo: contundente, destreza, precisión

     .->> contundente > destreza > precisión >>-.
    /                                            \
    \____________________ < _____________________/


*/
export class Espada_rota extends Producto{
    constructor(){
        super("Espada rota", "comun", "estilos/imgs/Espada_rota.png", 7600);

        this.tipo = "contundente";
        this.extra_ataque = 4;
    }
}

