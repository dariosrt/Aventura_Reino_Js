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
    header,
    main,
    footer,
    btn_batalla_on,
    btn_batalla_off,
    btn_combate_on,
    lista_enemigos,
    id_enemigo
} from "./constants.js"




/*
    Mi mayor dolor de cabeza, como solo es lectura al identificarme id_enemigo.id con -1 solo me sale error en la logica_combate
*/


btn_batalla_on.addEventListener("click", () => {


    header.classList.add("ocultando");
    main.classList.add("ocultando");
    footer.classList.add("ocultando");
    setTimeout(() => {
        header.classList="oculto";
        main.classList="oculto";
        footer.classList="oculto";
        batalla.classList= "batalla escena_secundaria on";
    }, 1000);
    crear_cajas_enemigos();

});
btn_batalla_off.addEventListener("click", () => {

    batalla.classList= "batalla escena_secundaria salida";
    header.classList="ocultando";
    main.classList="ocultando";
    footer.classList="ocultando";
    setTimeout(() => {
        batalla.classList = "batalla escena_secundaria off";
        header.classList.remove("ocultando");
        main.classList.remove("ocultando");
        footer.classList.remove("ocultando");
    }, 1000);

});

// btn_combate_on.addEventListener("click", () => {
//     batalla.classList.add("salida_alternativa");
//     setTimeout(() => {
//         batalla.classList = "batalla off";

//     }, 400);
//     setTimeout(() => {
//         combate.classList = "combate entrada_alternativa";
//     }, 500);
// });






export function crear_cajas_enemigos(){

    document.getElementById("enemigos_container").replaceChildren();

    lista_enemigos.forEach((enemigo, id) => {
        const caja = document.createElement("div");
        caja.classList.add("enemigo_box");
        caja.dataset.id = id;
        

        const img_enemigo = document.createElement("img");
        img_enemigo.classList.add("img_enemigo");
        img_enemigo.src = enemigo.avatar;



        const tipo = document.createElement("h4");

        const nombre = document.createElement("p");
        nombre.textContent = enemigo.nombre;

        const vida = document.createElement("p");
        vida.textContent = `Vida: ${enemigo.vida}`;

        const ataque = document.createElement("p");



        if(enemigo instanceof Jefe){
            tipo.textContent = "Jefe";
            ataque.textContent = `Ataque: ${enemigo.ataque*enemigo.multiplicador_ataque}`;
            console.log(enemigo.multiplicador_ataque);
        }
        else{
            tipo.textContent = "Enemigo";
            ataque.textContent = `Ataque: ${enemigo.ataque}`;
        }



        const btn = document.createElement("button");
        btn.classList.add("btn_desafiar");
        btn.textContent = "Desafiar";

        
        btn.addEventListener("click", () => {
            const contenedor_padre = btn.closest(".enemigo_box")
            if(btn.textContent === "Desafiar"){
                document.querySelectorAll(".desafiado").forEach(caja_enemigo => {
                  caja_enemigo.classList.remove('desafiado');
                });
                document.querySelectorAll(".btn_desafiar").forEach(boton => {
                    boton.textContent = "Desafiar";
                })
                contenedor_padre.classList.add("desafiado");
                btn.textContent = "Huir";
                id_enemigo.id = Number(contenedor_padre.dataset.id);
                console.log(id_enemigo.id);
                btn_combate_on.disabled = false;
            }
            else{
                contenedor_padre.classList.remove("desafiado");
                btn.textContent = "Desafiar";
                id_enemigo.id = -1;
                btn_combate_on.disabled = true;
            }
        });

// nombre, vida, ataque, defensa, avatar, arma


        caja.append(img_enemigo, tipo, nombre, vida, ataque, btn);
        document.getElementById("enemigos_container").appendChild(caja);
    });
}
// crear_cajas_enemigos();