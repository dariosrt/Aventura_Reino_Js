

import { jugador, lista_enemigos } from "./constants";
import { enemigo_id } from "./batalla";








// - `Vida del jugador = (vida actual + defensa) - ataque enemigo`
// - `Vida del enemigo = vida actual - ataque jugador`
// - **Cálculo de Puntos (al ganar):**
//     - `Puntos = 100` (base) + `ataque del enemigo`.
//     - Si es un `Jefe`: `Puntos = Puntos * multiplicador de daño`.




/* Devolver el ["Nombre del vencedor", Puntos obtenidos, Dinero ganado] 
    El dinero ganado he decidido que se calcula con puntos*100
*/
function combatir(){
    let turnos =0;
    const enemigo = lista_enemigos[enemigo_id];

    let continuar = true;

    while (continuar){
        jugador.atacado(enemigo.ataque)
        if(jugador.vida != 0){
            return [enemigo.nombre, 0, 0]
        }
        else{
            continuar = false;
        }

        if(enemigo.vida ==0){
            continuar = false;
            return calcular_cambio();
        }
    }

    

}




/*
    La función calcular cambio esta específicamente pensada en caso de que gane el jugador, ya que en el caso contrario 
    va ha devolver practicamente el mismo resultado a excepción del nombre del enemigo vencedor.
*/
function calcular_cambio(){

    let multiplicador = 1;
    if(enemigo instanceof Jefe){
        multiplicador = enemigo.multiplicador_ataque;
    }
    let puntos = (jugador.ataque + 100) * multiplicador;
    return [jugador.nombre, puntos, puntos*100];
}