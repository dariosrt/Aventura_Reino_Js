import { Jugador } from "./Entidades/Jugador.js";
import { Enemigo } from "./Entidades/Enemigo.js";
import { Jefe } from "./Entidades/Jefe.js";

import { Armadura } from "./Productos/Armadura.js";
import { Frasco } from "./Productos/Frasco.js";
import { Arco } from "./Productos/Arco.js";
import { Hacha } from "./Productos/Hacha.js";
import { Daga } from "./Productos/Daga.js";
import { Espada_rota } from "./Productos/Espada_rota.js";




export const header = document.querySelector("header");
export const main = document.querySelector("main");
export const footer = document.querySelector("footer");

export const jugador = new Jugador();

export const lista_productos = [];

export const mercado = document.getElementById("escena_mercado");
export const btn_mercado_on = document.getElementById("btn_mercado_on");
export const btn_mercado_off = document.getElementById("btn_mercado_off");

export const batalla = document.getElementById("escena_batalla");
export const btn_batalla_on = document.getElementById("btn_batalla_on");
export const btn_batalla_off = document.getElementById("btn_batalla_off");

lista_productos.push(new Arco());
lista_productos.push(new Hacha());
lista_productos.push(new Daga());

