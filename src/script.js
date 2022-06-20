const form_element = document.getElementById("add_item");
const num_tareas = document.querySelector(".tareas_pendientes");

let num = 0;

//Evento del boton AGREGAR TAREA
form_element.addEventListener("submit", (event) => {
  event.preventDefault();
  let now_item = document.getElementById("item").value;

  if (now_item) {
    form_element.reset();
    num++;
    let detail = now_item;
    let time = new Date();
    //tomo solo los primeros 8 caracteres de la hora
    let now = time.toTimeString().substring(0, 9);

    insert_rows(num, detail, now);
    suma_tarea();
  }
});

//Funcion que inserta los datos ingresados en la tabla
function insert_rows(num, detail, time) {
  let data_storage_table = document.getElementById("table").insertRow(1);
  let row_cell1 = data_storage_table.insertCell(0);
  let row_cell2 = data_storage_table.insertCell(1);
  let row_cell3 = data_storage_table.insertCell(2);

  const btn_borrar = document.createElement("button");
  btn_borrar.textContent = "X";
  btn_borrar.className = "btn_borrar btn btn-secondary";

  //Agrego el boton de tarea pendiente
  row_cell3.appendChild(btn_borrar);
  row_cell1.innerHTML = detail;
  row_cell2.innerHTML = time;

  //Dos Funciones que escuchan el boton de tarea pendiente
  btn_borrar.addEventListener("click", () => {
    // Cambia el boton a ok y lo inhabilita
    // btn_borrar.textContent = "Ok";
    // btn_borrar.disabled = true;

    //otra forma...borra la tarea
    data_storage_table.remove();
    resta_tarea();
  });
}

function suma_tarea() {
  num_tareas.textContent = "Tiene " + num + " tareas pendientes";
}

function resta_tarea() {
  num--;
  if (num != 0) {
    num_tareas.textContent = "Tiene " + num + " tareas pendientes";
  } else {
    num_tareas.textContent = "No tiene tareas pendientes";
  }
}
