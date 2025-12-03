import { Jugador } from "./Entidades/Jugador.js";
import { Enemigo } from "./Entidades/Enemigo.js";
import { Jefe } from "./Entidades/Jefe.js";

import { Frasco } from "./Productos/Frasco.js";
import { Arco } from "./Productos/Arco.js";
import { Hacha } from "./Productos/Hacha.js";
import { Daga } from "./Productos/Daga.js";
import { Espada_rota } from "./Productos/Espada_rota.js";
import { Pocion_vida } from "./Productos/Pocion_Vida.js";

import { calcular_cambio } from "./utils.js";

import {
    jugador,
    lista_productos,
    mercado,
    header,
    main,
    footer,
    btn_mercado_on,
    btn_mercado_off
} from "./constants.js"

/* Refrescar Los valores de Jugador que se muestran por pantalla
*/




    /*Vista Principal*/

export function mostrar_inventario(){
    const imgs = document.querySelectorAll(".item_img");

    for(let x=0; x<10; x++){
        if(jugador.inventario[x] != null){
            imgs[x].src = jugador.inventario[x].img;
            // imgs.item(x).src =jugador.inventario.at(x);
            // imgs.item(x).src =jugador.inventario.at(x).img;
        } else {
            imgs[x].src = "";
        }
    }

}



export function mostrar_estadisticas(){
    const stats = document.querySelectorAll(".mostrar_stats");

    document.getElementById("img_jugador").src = jugador.avatar;
    document.getElementById("stat_dinero").textContent = `Dinero: ${calcular_cambio(jugador.dinero)} $`;

    document.getElementById("stat_nombre").textContent = jugador.nombre;
    document.getElementById("stat_ataque").textContent = jugador.ataque;
    document.getElementById("stat_defensa").textContent = jugador.defensa;

}





    /* mercado */



/*
    ACTIVAR / DESACTIVAR ESCENA MERCADO 
*/















