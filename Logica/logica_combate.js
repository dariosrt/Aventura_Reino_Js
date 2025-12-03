import { Jefe } from "./Entidades/Jefe.js";
import { Enemigo } from "./Entidades/Enemigo.js";
import { Jugador } from "./Entidades/Jugador.js";


import { jugador, lista_enemigos, id_enemigo } from "./constants.js";








// - `Vida del jugador = (vida actual + defensa) - ataque enemigo`
// - `Vida del enemigo = vida actual - ataque jugador`
// - **Cálculo de Puntos (al ganar):**
//     - `Puntos = 100` (base) + `ataque del enemigo`.
//     - Si es un `Jefe`: `Puntos = Puntos * multiplicador de daño`.




/* Devolver el ["Nombre del vencedor", Puntos obtenidos, Dinero ganado, booleano si se ha finalizado el juego o no] 
    El dinero ganado he decidido que se calcula con puntos*100
*/
export function combatir(){

    console.log(id_enemigo.id);
    if(id_enemigo.id === -1){
        return null;
    }
    const enemigo = lista_enemigos[id_enemigo.id];
    
    let continuar = true;
    let num_repeticiones_max=0;
    while (continuar === true){
        jugador.atacado(enemigo.ataque)
        enemigo.atacado(jugador.atacar());
        if(jugador.vida === 0){
            continuar = false;
            return [enemigo.nombre, 0, 0, true, enemigo.avatar];
        }

        if(enemigo.vida === 0){
            continuar = false;
            lista_enemigos.splice(id_enemigo.id, 1); //Eliminar el enemigo de la lista de enemigos
            let resultado_final = calcular_resultados_combate(enemigo);
            return resultado_final;
        }
        if(num_repeticiones_max > 50){
            continuar=false;
        }
        num_repeticiones_max+=1;
    }

    

}




/*
    La función calcular cambio esta específicamente pensada en caso de que gane el jugador, ya que en el caso contrario 
    va ha devolver practicamente el mismo resultado a excepción del nombre del enemigo vencedor.
*/
function calcular_resultados_combate(enemigo){

    let multiplicador = 1;
    let pantalla_final = false;
    if(enemigo instanceof Jefe){
        multiplicador = enemigo.multiplicador_ataque;
    }
    if(lista_enemigos.length === 0){
        pantalla_final = true;
    }
    let puntos = (enemigo.ataque + 100) * multiplicador;

    jugador.puntos += puntos;
    jugador.dinero += puntos*100;
    return [jugador.nombre, puntos, puntos*100, pantalla_final, enemigo.avatar];
}