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


const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");


const lista_productos = [];


lista_productos.push(new Arco());
lista_productos.push(new Hacha());
lista_productos.push(new Daga());




const btn_mercado_on = document.getElementById("btn_mercado_on");
const btn_mercado_off = document.getElementById("btn_mercado_off");

    /* mercado */



/*
    ACTIVAR / DESACTIVAR ESCENA MERCADO 
*/
btn_mercado_on.addEventListener("click", () => {


    header.classList.add("ocultando");
    main.classList.add("ocultando");
    footer.classList.add("ocultando");
    setTimeout(() => {
        header.classList="oculto";
        main.classList="oculto";
        footer.classList="oculto";
        mercado.classList= "mercado on";
    }, 1000);

});
btn_mercado_off.addEventListener("click", () => {

    mercado.classList= "mercado salida";
    header.classList="ocultando";
    main.classList="ocultando";
    footer.classList="ocultando";
    setTimeout(() => {
        mercado.classList = "mercado off";
        header.classList.remove("ocultando");
        main.classList.remove("ocultando");
        footer.classList.remove("ocultando");
    }, 1000);

});

