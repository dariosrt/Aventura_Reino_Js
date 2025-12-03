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
    final,
    header,
    main,
    footer,
    btn_combate_on,
    btn_combate_off,
    nom_ganador,
    pt_ganados,
    dinero_ganado,
    lista_enemigos,
    id_enemigo
} from "./constants.js"

import { mostrar_resultados_finales } from "./final.js";

import { combatir } from "./logica_combate.js";

// const img_jugador = document.getElementById("img_entidad_jugador");
// const img_enemigo = document.getElementById("img_entidad_enemigo");

btn_combate_on.addEventListener("click", () => {
    batalla.classList.add("salida_alternativa");
    setTimeout(() => {
        batalla.classList = "batalla escena_secundaria off";

    }, 400);
    setTimeout(() => {
        combate.classList = "combate escena_secundaria entrada_alternativa";
    }, 500);
    mostrar_resultados();
});

btn_combate_off.addEventListener("click", () => {
    if(btn_combate_off.classList.contains("mostrar_final")){
        combate.classList.add("salida_alternativa");
        setTimeout(() => {
            combate.classList = "combate escena_secundaria off";

        }, 400);
        setTimeout(() => {
            final.classList = "final escena_secundaria entrada_alternativa";
        }, 500);
        mostrar_resultados_finales();
    }

    else{
        combate.classList= "combate escena_secundaria salida";
        header.classList="ocultando";
        main.classList="ocultando";
        footer.classList="ocultando";
        setTimeout(() => {
            combate.classList = "combate escena_secundaria off";
            header.classList.remove("ocultando");
            main.classList.remove("ocultando");
            footer.classList.remove("ocultando");
        }, 1000);
        mostrar_inventario();
        mostrar_estadisticas();
    }
});



function mostrar_resultados(){

    let resultados = combatir();
    console.log(resultados);
    if(resultados){
        img_entidad_jugador.setAttribute("src", jugador.avatar);

        nom_ganador.textContent = `Ganador: ${resultados[0]}`;
        pt_ganados.textContent = `Puntos ganados: +${resultados[1]}pt`;
        dinero_ganado.textContent = `Dinero ganado: +${(calcular_cambio(resultados[2]))} $`;
        // if(resultados[3] === false){
        if(resultados[3] === true){
            btn_combate_off.classList.add("mostrar_final");
        }
        img_entidad_enemigo.setAttribute("src", resultados[4]);
    }

}


