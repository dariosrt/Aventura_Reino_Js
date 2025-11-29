import { Jugador } from "./Entidades/Jugador.js";
import { Enemigo } from "./Entidades/Enemigo.js";
import { Jefe } from "./Entidades/Jefe.js";

import { Armadura } from "./Productos/Armadura.js";
import { Frasco } from "./Productos/Frasco.js";
import { Arco } from "./Productos/Arco.js";
import { Hacha } from "./Productos/Hacha.js";
import { Daga } from "./Productos/Daga.js";


/* Refrescar Los valores de Jugador que se muestran por pantalla
*/





const mercado = document.getElementById("escena_mercado");


const header = document.getElementById("header");
const main = document.querySelector("main");
const footer = document.getElementById("footer");


const lista_productos = [];


lista_productos.push(new Arco());
lista_productos.push(new Hacha());
lista_productos.push(new Daga());



const btn_mercado_on = document.getElementById("btn_mercado_on");
const btn_mercado_off = document.getElementById("btn_mercado_off");

    /* mercado */



btn_mercado_on.addEventListener("click", () => {

    
    // ocultar_elementos(header);
    // ocultar_elementos(main);
    // ocultar_elementos(footer);

    mercado.classList= "mercado on";

});
btn_mercado_off.addEventListener("click", () => {

    mercado.classList= "mercado salida";
    setTimeout(() => {
        mercado.classList = "mercado off";
    }, 1000);

});

