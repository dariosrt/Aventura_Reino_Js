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




/*
    MOSTRAR Y REFRESCAR ESTADÍSTICAS DEL JUGADOR
*/


cajas.forEach((caja, index) => {
    caja.dataset.id = index; 
    
    // Agregar listener a cada caja
    caja.addEventListener("click", () => {
        const id = caja.dataset.id; // obtener el data-id
        console.log("Has clicado la caja con id:", id);

        // Aquí llamas a la función que quieras
        funcionAlClic(id);
    });
});


mostrar_inventario();
mostrar_estadisticas();





