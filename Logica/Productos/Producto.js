

export class Producto{
    constructor(nombre, rareza, img, valor){
        this.nombre = nombre;
        this.rareza = rareza;
        this.img = img;
        this.valor = valor;
    }

    // constructor(nombre_objeto){
    //     if(nombre_objeto === "hacha"){
    //         nombre = "hacha obsidiana";
    //         rareza = "epico";
    //         img = img;
    //         valor = valor;
    //     }

    //     if(nombre_objeto === "hacha"){
    //         nombre = "hacha obsidiana";
    //         rareza = "epico";
    //         img = img;
    //         valor = valor;
    //     }
    // }

    // 1=100%   0.1=10%
    descuento(descuento){
        this.valor = round(this.valor - (this.valor*descuento), 0)
    }
}
