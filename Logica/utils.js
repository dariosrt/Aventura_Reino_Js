import { Jugador } from "./Entidades/Jugador.js";
import { Enemigo } from "./Entidades/Enemigo.js";
import { Jefe } from "./Entidades/Jefe.js";



/* Refrescar Los valores de Jugador que se muestran por pantalla
*/


let jugador = new Jugador()



const mercado = document.getElementById("mercado");



const boton = document.getElementById("btn_luchar");

export function calcular_cambio(p){ 
    return (p/100).toFixed(2);
}