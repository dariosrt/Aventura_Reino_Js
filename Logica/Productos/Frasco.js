import { Producto } from "./Producto.js";



/*
    La alomancia se consume con frascos de metales, 
*/

/*
    reserva_metales = [
        0 => Peltre
        1 => Latón
        2 => Cobre
        3 => Zinc
        4 => Atium
    ]

    PELTRE = aumento de la fuerza y de la defensa en un 50% ( -20 unidades )
        \____Aumenta las habilidades físicas
         \____id_metal = 0
    
    LATON = disminulle la defensa en un 30% ( -30 unidades )
        \___Sirve para aplacar las emociones del ribal.
         \____id_metal = 1

    COBRE = sirve para anular un posible uso de laton en la contra del jugador/enemigo que lo use ( -20 unidades )
        \___Metal abundante, sirve para eliminar un posible uso de laton en tu contra.
         \____id_metal = 2

    ZINC = sirve para ver las estadísticas, equipamiento y alomancia de un enemigo antes del combate ( -20 unidades )
        \___Sirve para aplacar las emociones del rival, con ello hará que baje la guardia permitiendote
         |  analizar a tu enemigo mas facilmente y antes del combate. (solo puede ser empleado por el jugador).
         \____id_metal = 3

    ATIUM = el ataque y la defensa aumentan porcentalmente a la cantidad de atium efectivo empleado (no utilizado) ( -{0/100} unidades )
        \___Sirve para aumentar el daño y la defensa proporcionalmente a la cantidad de atium usada en el turno
         |  Si el jugador usa 67 unidades de atium y el enemigo 18, el jugador al emplear mayor cantidad de atium
         |  será el que aumente su ataque y defensa porcentualmente a la resta de su atium utilizado y al del enemigo.
         |  def_jugador = def_jugador *(at_jugador - at_enemigo)
         |  ataque_jugador = ataque_jugador *(at_jugador - at_enemigo)
         \____id_metal = 4

*/

export class Frasco extends Producto {

    constructor(nombre, rareza, img, precio){
        super(nombre, rareza, img, precio);
        this
        cantidad = 40;
        
    }


}