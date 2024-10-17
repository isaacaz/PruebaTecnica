class Producto {
    constructor(nombre,precio,stock){
        this.nombre = this.validarNombre(nombre);
        this.precio = this.validarPrecio(precio);
        this.stock = this.validarStock(stock);
    }

    validarNombre(nombre) {
        if (typeof nombre != 'string') {
            throw new Error("El nombre ingresado debe ser un texto");
        } else {
            return nombre;
        }
    }

    validarPrecio(precio) {
        if (typeof precio != 'number' || precio <= 0) {
            throw new Error("EL precio debe ser un numero mayor que 0");
        } else {return precio;}
    }

    validarStock(stock) {
        if (typeof stock != 'number' || stock < 0) {
            throw new Error("EL precio debe ser un numero positivo");
        } else { return stock; }
    }

    comprar(cantidad) {
        if (cantidad > this.stock) {
            throw new Error("Stock Insuficiente");
        } else { this.stock -= cantidad   }
    }

    reabastecer(cantidad) {
        if (cantidad < 0) {
            throw new Error("La cantidad debe ser positiva");
        } else {
            this.stock += cantidad;
        }
    }
}

const Karpil = new Producto("Karpil", 1, 10);
const Chocolike = new Producto("Chocolike",1,2);
console.log(Karpil)
Karpil.comprar(4);
console.log(`Stock Karpil tras comprar: ${Karpil.stock} `)
Karpil.reabastecer(5);
console.log(`Stock Karpil tras reabastecer: ${Karpil.stock} `)