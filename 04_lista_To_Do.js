class Display {
    constructor() {}
    agregar(Tareas) {
        let tableBody = document.getElementById("table-body")
        let htmlagregado = "";
        for (let i = 0; i < Tareas.length; i++) {
            htmlagregado += `
                    <tr>
                     <td>${i + 1}</td>
                     <td>${Tareas[i]}</td>
                     <td> <button type="button" onclick = "borrarTarea(${i})" id ="dlt-btn"> Eliminar </button> </td>
                    </tr>
            `;
        }
        tableBody.innerHTML = htmlagregado;
    }

    validar(tarea) {
        if (tarea == "") {
          return false;
        } else return true;
    }

    limpiar() {
        let formulario = document.getElementById("Formulario");
        formulario.reset();
    }
    
}

const tablaHead = document.getElementById('tabla-head');
const noHayTareas = document.getElementById('sin-tareas');

function mostrarLista() {
    let listaTareas = localStorage.getItem("listaTareas");

    if (listaTareas == null) {
      arrayLista = [];
      tablaHead.replaceWith(noHayTareas);
    } else {
      arrayLista = JSON.parse(listaTareas);
      noHayTareas.replaceWith(tablaHead);
    }
    new Display().agregar(arrayLista);
  } 
  mostrarLista();

function borrarTarea(index) {
let listaTareas = localStorage.getItem("listaTareas");
if (listaTareas == null) {
    arrayLista = [];
} else {
    arrayLista = JSON.parse(listaTareas);
}
arrayLista.splice(index, 1);
localStorage.setItem("listaTareas", JSON.stringify(arrayLista));
mostrarLista();
}

const form = document.getElementById("Formulario");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
    let tareaObtenida = document.getElementById("TareaInput").value;
    let DisplayTareas = new Display();
    if (DisplayTareas.validar(tareaObtenida)) {
      let listaTareas = localStorage.getItem("listaTareas");
      if (listaTareas == null) {
        arrayLista = [];
      } else {
        arrayLista = JSON.parse(listaTareas);
      }
      arrayLista.push(tareaObtenida);
      localStorage.setItem("listaTareas", JSON.stringify(arrayLista));
  
      new Display().agregar(arrayLista);
      DisplayTareas.limpiar();
    } else {
        alert("Debes ingresar texto !");
    }
};