import { Jugador } from "./Entidades/Jugador.js";
import { Enemigo } from "./Entidades/Enemigo.js";
import { Jefe } from "./Entidades/Jefe.js";

import { Arco } from "./Productos/Arco.js";
import { Hacha } from "./Productos/Hacha.js";
import { Daga } from "./Productos/Daga.js";
import { Espada_rota } from "./Productos/Espada_rota.js";
import { Pocion_vida } from "./Productos/Pocion_Vida.js";


import { calcular_cambio } from "./utils.js";
import { 
    // crear_cajas_productos, 
    mostrar_inventario,
    mostrar_estadisticas
} from "./escenas.js";
import {
    jugador,
    lista_productos,
    mercado,
    header,
    main,
    footer,
    btn_mercado_on,
    btn_mercado_off
} from "./constants.js"


/* Refrescar Los valores de Jugador que se muestran por pantalla
*/





let cantidad_a_gastar = 0;
const botones = document.querySelectorAll(".btn_comprar");
const btn_comprar = document.getElementById("comprar");

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




/*
    Crear y añadir los productos dela tienda
*/

//Limpia lo que contenga mercado_body y añade las cajas que contiene la lista de productos

export function crear_cajas_productos(){

    document.getElementById("mercado_body").replaceChildren();

    lista_productos.forEach((producto, id_producto) => {
        const caja = document.createElement("div");
        caja.classList.add("product_box");
        caja.dataset.precio = producto.valor;
        caja.dataset.id_producto = id_producto;

        const img = document.createElement("img");
        img.classList.add("img_producto");
        img.src = producto.img;



        const nombre = document.createElement("h4");
        nombre.textContent = producto.nombre;


        const valor = document.createElement("span");
        valor.textContent = `Valor: ${calcular_cambio(producto.valor)} $`;

        const btn = document.createElement("button");
        btn.classList.add("btn_comprar");
        btn.textContent = "Añadir";


        /*
            Si no pongo la lógica de compra aquí,al cerrar el mercado y volver a abrirlo no deja
            añadir productos a a cesta
        */
        btn.addEventListener("click", () => {
            const contenedor_padre = btn.closest(".product_box");
            const precio = Number(contenedor_padre.dataset.precio);

            if(btn.textContent === "Retirar"){

                cantidad_a_gastar -= precio;
                console.log(cantidad_a_gastar)
                console.log()
                contenedor_padre.classList.remove("añadido");
                btn.textContent = "Añadir";
                if(cantidad_a_gastar === 0){
                    btn_comprar.disabled = true;
                }
                else{
                    btn_comprar.disabled = false;
                }
                jugador.hueco_inventario += 1;
            }
            else if (jugador.dinero-cantidad_a_gastar >= precio && jugador.hueco_inventario !== 0) {
                cantidad_a_gastar += precio;
                console.log(cantidad_a_gastar)

                contenedor_padre.classList.add("añadido");
                if(btn_comprar.disabled === true) btn_comprar.disabled = false;

                btn.textContent = "Retirar";
                jugador.hueco_inventario -= 1;
            } else {
                btn.classList.add("error_compra");
                // Quitar la clase después de la animación
                setTimeout(() => {
                    btn.classList.remove("error_compra");
                }, 200);
            }
        });

        caja.append(img, nombre, valor, btn);
        document.getElementById("mercado_body").appendChild(caja);
    });
}

crear_cajas_productos();








// botones.forEach(btn => {
//     btn.addEventListener("click", () => {
//         const contenedor_padre = btn.closest(".product_box");
//         const precio = Number(contenedor_padre.dataset.precio);

//         if(btn.textContent === "Retirar"){

//             cantidad_a_gastar -= precio;
//             console.log(cantidad_a_gastar)
//             contenedor_padre.classList.remove("añadido");
//             btn.textContent = "Añadir";
//             if(cantidad_a_gastar === 0){
//                 btn_comprar.disabled = true;
//             }
//             else{
//                 btn_comprar.disabled = false;
//             }
//         }
//         else if (jugador.dinero-cantidad_a_gastar >= precio && jugador.hueco_inventario !== 0) {
//             cantidad_a_gastar += precio;
//             console.log(cantidad_a_gastar)

//             contenedor_padre.classList.add("añadido");
//             if(btn_comprar.disabled === true) btn_comprar.disabled = false;

//             btn.textContent = "Retirar";
//             jugador.hueco_inventario -= 1;
//         } else {
//             contenedor_padre.classList.add("error_compra");
//             // Quitar la clase después de la animación
//             setTimeout(() => {
//                 contenedor_padre.classList.remove("error_compra");
//             }, 500);
//         }
//     });
// });


function comprar(){
    jugador.dinero -=cantidad_a_gastar;
    cantidad_a_gastar=0;

    let id_productos = [];
    let contenedor_elementos = document.querySelectorAll(".añadido");

    //Un forEach para obtener los id de los elementos de lista_productos y no cambien cando se eliminen en el otro bucle
    contenedor_elementos.forEach(e => {
        id_productos.push(e.dataset.id_producto);
    });
    contenedor_elementos.forEach(e => {
        e.remove();
    });

    id_productos.forEach(id => {
        jugador.agregar_objeto(lista_productos[id]);
    });


    id_productos.sort((a, b) => b - a); //Ordenar elementos de mayor a menor
    id_productos.forEach(id => {
        lista_productos.splice(id, 1);
    });

    btn_comprar.disabled = true;
    jugador.restaurar_hueco_inventario();
    crear_cajas_productos();
    mostrar_estadisticas();
    mostrar_inventario();
    console.log(jugador.inventario);
}
btn_comprar.addEventListener("click", comprar);
