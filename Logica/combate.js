import { Jugador } from "./Entidades/Jugador.js";
import { Enemigo } from "./Entidades/Enemigo.js";
import { Jefe } from "./Entidades/Jefe.js";
import { Frasco } from "./Productos/Frasco.js";
import { Arco } from "./Productos/Arco.js";
import { Hacha } from "./Productos/Hacha.js";
import { Daga } from "./Productos/Daga.js";
import { Espada_rota } from "./Productos/Espada_rota.js";
import { calcular_cambio } from "./utils.js";
import { 
    mostrar_inventario,
    mostrar_estadisticas
} from "./escenas.js";
import {
    jugador,
    batalla,
    combate,
    header,
    main,
    footer,
    btn_combate_off,
    lista_enemigos
} from "./constants.js"

import { enemigo_combatir } from "./batalla.js";


btn_combate_on.addEventListener("click", () => {
    batalla.classList.add("salida_batalla");
    setTimeout(() => {
        batalla.classList = "batalla off";

    }, 400);
    setTimeout(() => {
        combate.classList = "combate entrada_combate";
    }, 500);
});

btn_combate_off.addEventListener("click", () => {
    combate.classList= "combate salida";
    header.classList="ocultando";
    main.classList="ocultando";
    footer.classList="ocultando";
    setTimeout(() => {
        combate.classList = "combate off";
        header.classList.remove("ocultando");
        main.classList.remove("ocultando");
        footer.classList.remove("ocultando");
    }, 1000);
});


function obtener_imagenes(){
    document.getElementById("img_entidad_jugador").setAttribute("src", jugador.avatar);
    document.getElementById("img_entidad_jugador").setAttribute("src", jugador.avatar);
}



