class Libro {
    constructor(titulo,autor,codigo){
        this.titulo = this.validarTitulo(titulo);
        this.autor = this.validarAutor(autor);
        this.codigo = this.validarCodigo(codigo);
    }

    validarTitulo(valor) {
        if (typeof valor != 'string') {
            throw new Error("El titulo del libro debe ser un texto.");
            
        } else {
            return valor;
        }
    }
    validarAutor(valor) {
        if (typeof valor != 'string') {
            throw new Error("El nombre del autor debe ser un texto.");
        } else {
            return valor;
        }
    }
    validarCodigo(valor) {
        if (typeof valor != 'string') {
            throw new Error("El codigo del libro debe ser un texto.");
        } else {
            return valor;
        }
    }
}

class Biblioteca {
    constructor() {
        this.Contenido = [];
    }

    agregarLibro(libro) {
        if (libro instanceof Libro) {
            this.Contenido.push(libro);
        } else {
            throw new Error("El libro agregado no pertenece a la clase Libro");
            
        }
    }

    // Esta funcion "devuelve/retorna" el listado de libros --- console.log(Biblioteca.listarLibros())
    listarLibros() {
        return this.Contenido.map((libro)=> ` ${libro.titulo } `)
    }

    // Esta funcion actua tras agregarla a la biblioteca deseada ---- Biblioteca.funcion()
    listarLibros2() {
        this.Contenido.forEach((libro,indice) => {
            console.log(`${indice + 1}: ${libro.titulo}`);
        });
    }

    buscarPorAutor(Autor) {
        return this.Contenido.filter((libro) => libro.autor == Autor);
    }
}

const Obra1 = new Libro("Estudio en Escarlata", "Arthur Conan Doyle", "ACI123");
const Obra2 = new Libro("Paradise Lost", "Jhon Milton", "ZXY456");
const Obra3 = new Libro("Paradise Found", "Jhon Milton", "JFA434");
const VillaMontes = new Biblioteca();
VillaMontes.agregarLibro(Obra1);
VillaMontes.agregarLibro(Obra2);
VillaMontes.agregarLibro(Obra3);

console.log(VillaMontes.listarLibros());
VillaMontes.listarLibros2();


console.log(VillaMontes.buscarPorAutor("Jhon Milton"));