

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
    id_enemigo,
    info_rango,
    info_pts,
    btn_reiniciar,


} from "./constants.js"





export function mostrar_resultados_finales(){

    info_rango.textContent = "El jugador "+jugador.nombre+" ha logrado el rango: "+rango_obtenido();
    info_pts.textContent = "Puntos obtenidos: "+jugador.puntos;



}

/*
    Si no ha sido derrotado en combate y tiene mas de 2000 puntos, obtendrá el rango de veterano
*/
function rango_obtenido(){
    if(jugador.vida > 0 && jugador.puntos > 2000){
        return "Veterano";
    }
    else{
        return "Novato";
    }
}

btn_reiniciar.addEventListener("click", () => {
    location.reload();
})