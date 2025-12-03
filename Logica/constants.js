import { Jugador } from "./Entidades/Jugador.js";
import { Enemigo } from "./Entidades/Enemigo.js";
import { Jefe } from "./Entidades/Jefe.js";

import { Arco } from "./Productos/Arco.js";
import { Hacha } from "./Productos/Hacha.js";
import { Daga } from "./Productos/Daga.js";
import { Espada_rota } from "./Productos/Espada_rota.js";
import { Pocion_vida } from "./Productos/Pocion_Vida.js";




export const header = document.querySelector("header");
export const main = document.querySelector("main");
export const footer = document.querySelector("footer");

export const jugador = new Jugador();

export const lista_productos = [];
export const lista_enemigos = [];

export const mercado = document.getElementById("escena_mercado");
export const btn_mercado_on = document.getElementById("btn_mercado_on");
export const btn_mercado_off = document.getElementById("btn_mercado_off");

export const batalla = document.getElementById("escena_batalla");
export const btn_batalla_on = document.getElementById("btn_batalla_on");
export const btn_batalla_off = document.getElementById("btn_batalla_off");

export const combate = document.getElementById("escena_combate");
export const btn_combate_on = document.getElementById("btn_combate_on");
export const btn_combate_off = document.getElementById("btn_combate_off");
export const nom_ganador = document.getElementById("nom_ganador");
export const pt_ganados = document.getElementById("pt_ganados");
export const dinero_ganado = document.getElementById("dinero_ganado");

export const id_enemigo ={id: -1};

export const final = document.getElementById("escena_final");
export const info_rango = document.getElementById("info_rango");
export const info_pts = document.getElementById("info_pts");

export const btn_reiniciar = document.getElementById("btn_reiniciar");


lista_productos.push(new Arco());
lista_productos.push(new Hacha());
lista_productos.push(new Daga());
lista_productos.push(new Pocion_vida());
lista_productos.push(new Pocion_vida());
lista_productos.push(new Pocion_vida());
lista_productos.push(new Pocion_vida());
lista_productos.push(new Pocion_vida());
lista_productos.push(new Pocion_vida());
lista_productos.push(new Pocion_vida());
lista_productos.push(new Pocion_vida());
lista_productos.push(new Pocion_vida());
lista_productos.push(new Pocion_vida());


lista_enemigos.push(new Jefe("Inquisidor", 90, 40, 50, "estilos/imgs/Inquisidor.webp", 1.4));
lista_enemigos.push(new Enemigo("No muerto", 40, 30, 20, "estilos/imgs/No_muerto.png"));
lista_enemigos.push(new Enemigo("No muerto", 40, 40, 20, "estilos/imgs/No_muerto.png"));
lista_enemigos.push(new Enemigo("No muerto", 40, 40, 20, "estilos/imgs/No_muerto.png"));
lista_enemigos.push(new Enemigo("No muerto", 40, 40, 20, "estilos/imgs/No_muerto.png"));
lista_enemigos.push(new Enemigo("No muerto", 40, 40, 20, "estilos/imgs/No_muerto.png"));
lista_enemigos.push(new Enemigo("No muerto", 40, 40, 20, "estilos/imgs/No_muerto.png"));
lista_enemigos.push(new Enemigo("No muerto", 40, 40, 20, "estilos/imgs/No_muerto.png"));
lista_enemigos.push(new Enemigo("No muerto", 40, 40, 20, "estilos/imgs/No_muerto.png"));

