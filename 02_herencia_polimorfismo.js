class Vehiculo {
    constructor(marca,modelo,anio){
        this.marca = this.validarMarca(marca);
        this.modelo = this.validarModelo(modelo);
        this.anio = this.validarAnio(anio);
    }

    validarMarca(marca) {
        if (typeof marca != 'string' ) {
            throw new Error("La marca ingresada debe ser un texto");
        } else {
            return marca;
        }
    }

    validarModelo(modelo) {
        if (typeof modelo != 'string' ) {
            throw new Error("El modelo ingresado debe ser un texto");
        } else {
            return modelo;
        }
    }

    validarAnio(anio) {
        if (typeof anio != 'number' ) {
            throw new Error("El año ingresado debe ser un numero");
        } else {
            return anio;
        }
    }

    obtenerDetalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.Anio}`)
    }
}

const Toyo20 = new Vehiculo("Toyota","Hilux",2020);
console.log(Toyo20);

class Coche extends Vehiculo {
    constructor(marca,modelo,anio,numeroPuertas){
        super(marca,modelo,anio);
        this.numeroPuertas = this.validarPuertas(numeroPuertas);
    }
    validarPuertas(n) {
        if (typeof n != 'number' || n <= 0) {
            throw new Error("El numero de puertas debe ser un numero positivo");
        } else {
            return n;
        }
    }

    obtenerDetalles() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.Anio}, Puertas: ${this.numeroPuertas}`)
    }
}

const Toyo21 = new Coche("Toyota","North",2021,4);
console.log(Toyo21);
Toyo21.obtenerDetalles();