import { Jugador } from "./Entidades/Jugador.js";
import { Enemigo } from "./Entidades/Enemigo.js";
import { Jefe } from "./Entidades/Jefe.js";

import { Armadura } from "./Productos/Armadura.js";
import { Frasco } from "./Productos/Frasco.js";
import { Arco } from "./Productos/Arco.js";
import { Hacha } from "./Productos/Hacha.js";
import { Daga } from "./Productos/Daga.js";
import { Espada_rota } from "./Productos/Espada_rota.js";


import { calcular_cambio } from "./utils.js";
import { 
    // crear_cajas_productos, 
    mostrar_inventario,
    mostrar_estadisticas
} from "./escenas.js";
import {
    jugador,
    lista_productos,
    batalla,
    header,
    main,
    footer,
    btn_batalla_on,
    btn_batalla_off
} from "./constants.js"

const botones = document.querySelectorAll(".btn_comprar");
const btn_comprar = document.getElementById("comprar");

btn_batalla_on.addEventListener("click", () => {


    header.classList.add("ocultando");
    main.classList.add("ocultando");
    footer.classList.add("ocultando");
    setTimeout(() => {
        header.classList="oculto";
        main.classList="oculto";
        footer.classList="oculto";
        batalla.classList= "batalla on";
    }, 1000);

});
btn_batalla_off.addEventListener("click", () => {

    batalla.classList= "batalla salida";
    header.classList="ocultando";
    main.classList="ocultando";
    footer.classList="ocultando";
    setTimeout(() => {
        batalla.classList = "batalla off";
        header.classList.remove("ocultando");
        main.classList.remove("ocultando");
        footer.classList.remove("ocultando");
    }, 1000);

});
