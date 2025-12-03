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
    mercado,
    header,
    main,
    footer,
    btn_mercado_on,
    btn_mercado_off
} from "./constants.js"
import { Pocion_vida } from "./Productos/Pocion_Vida.js";
import { Producto } from "./Productos/Producto.js";




/*
    MOSTRAR Y REFRESCAR ESTADÍSTICAS DEL JUGADOR
*/

const item_box = document.querySelectorAll(".item_box");
const img_item_jugador = document.getElementById("img_item_jugador");

function interactuar_con_inventario(caja){
    let posicion = Number(caja.dataset.posicion_id);
    if(jugador.inventario[posicion] instanceof Pocion_vida){

        if(jugador.vida === jugador.max_vida){
            caja.classList.add("error_compra");
            // Quitar la clase después de la animación
            setTimeout(() => {
                caja.classList.remove("error_compra");
            }, 200);
            console.log("La vida ya esta al máximo.");
        }
        else{
            jugador.curarse();
            jugador.inventario[posicion] = null;
        }
    }
    else if(jugador.inventario[posicion] !== null){
        jugador.arma=posicion;
    }

    mostrar_inventario();
    mostrar_estadisticas();
}

item_box.forEach(caja => {
    caja.addEventListener("click", () => interactuar_con_inventario(caja));
});

// function mostrar_arma_seleccionada(){
    
//     img_item_jugador.setAttribute("src", jugador.inventario[jugador.arma].img);
// }

// mostrar_arma_seleccionada();
mostrar_inventario();
mostrar_estadisticas();





