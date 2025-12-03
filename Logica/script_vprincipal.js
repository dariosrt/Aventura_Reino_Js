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

// Importante usar module en el script (dentro del html) para que permita usar/soportar los imports el naveador




// const boton = document.getElementById("btn_luchar");


// console.log(jugador.avatar);





// boton.addEventListener('onclick', () => {
//     let stats_jugador = document.getElementsByClassName("mostrar_stats");
//     console.log(stats_jugador);

// })


/*
    MOSTRAR Y REFRESCAR ESTADÍSTICAS DEL JUGADOR
*/





mostrar_inventario();
mostrar_estadisticas();





