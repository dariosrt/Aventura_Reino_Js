import { Jugador } from "./Entidades/Jugador.js";
import { Enemigo } from "./Entidades/Enemigo.js";
import { Jefe } from "./Entidades/Jefe.js";

import { Armadura } from "./Productos/Armadura.js";
import { Frasco } from "./Productos/Frasco.js";

// Importante usar module en el script (dentro del html) para que permita usar/soportar los imports el naveador



const img_jugador = document.getElementById("img_jugador");

const boton = document.getElementById("btn_luchar");

const escena_mercado = document.getElementById("escena_mercado");
const escena_batalla = document.getElementById("escena_batalla");
const escena_principal = document.getElementById("escena_principal")

let jugador = new Jugador();
console.log(jugador.avatar);

img_jugador.setAttribute("src", jugador.avatar);


boton.addEventListener('onclick', () => {
    let stats_jugador = document.getElementsByClassName("mostrar_stats");
    console.log(stats_jugador);

})


function transicion_escena_principal_m(){

}

function transicion_escena_principal_b(){

}

function transicion_escena_mercado(){
}

function transicion_escena_batalla(){
    
}








