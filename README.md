
# Prueba Técnica

Prueba de JavaScript: funciones, programación orientada objetos (POO) y manipulación DOM.

## Creación de Clases

Clase Producto

Crea una clase llamada Producto con las siguientes propiedades:

- nombre (string)

- precio (número, debe ser mayor que cero)

- stock (número, debe ser mayor o igual que cero)

La clase debe incluir los siguientes métodos:

- comprar(cantidad): que reste la cantidad del stock, lanzando un error con el mensaje "Stock insuficiente" si no hay suficiente.

- reabastecer(cantidad): que sume la cantidad al stock. Si la cantidad es negativa, debe lanzar un error con el mensaje "La cantidad debe ser positiva".

## Herencia y Polimorfismo

Clase Vehiculo y Coche

Crea una clase Vehiculo que tenga las siguientes propiedades:

- marca (string)

- modelo (string)

- anio (número)

Crea un método obtenerDetalles que retorne una cadena con el siguiente formato:

- "Marca: {marca}, Modelo: {modelo}, Año: {anio}".

Luego, crea una clase Coche que extienda Vehiculo y tenga la propiedad adicional:

- numeroPuertas (número)

Sobrescribe el método obtenerDetalles para incluir el número de puertas en la salida.

## Libro y Biblioteca

Crea una clase Libro con las siguientes propiedades:

- titulo (string)

- autor (string)

- codigo (string)

Luego, crea una clase Biblioteca que contenga un array de libros y tenga los siguientes métodos:

- agregarLibro(libro): que añada un libro al array.

- listarLibros(): que devuelva una lista de títulos de libros.

- buscarPorAutor(autor): que retorne los libros de un autor específico.

## Lista To-Do

Crea una lista de tareas donde los usuarios puedan agregar y eliminar tareas. 

Las tareas deben guardarse en LocalStorage para que no se pierdan al recargar la página.

- HTML
- JAVASCRIPT

## Authors

- [@isaacaz](https://github.com/isaacaz)


![Logo](https://th.bing.com/th/id/OIP.x2nAAWtGtyx8GJvgkDUn9wHaHa?rs=1&pid=ImgDetMain)

