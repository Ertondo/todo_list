const form_element = document.getElementById("add_item");

form_element.addEventListener("submit", (event) => {
  event.preventDefault();
  let now_item = document.getElementById("item").value;
  console.log(now_item);
  form_element.reset();

  let num = 0;
  let detail = now_item;
  let time = new Date();

  let now = time.toTimeString().substring(0, 9);

  insert_rows(num, detail, now);
});

//Funcion que inserta los datos ingresados en la tabla
function insert_rows(num, detail, time) {
  let data_storage_table = document.getElementById("table").insertRow(1);
  let row_cell1 = data_storage_table.insertCell(0);
  let row_cell2 = data_storage_table.insertCell(1);
  let row_cell3 = data_storage_table.insertCell(2);

  row_cell1.innerHTML = num;
  row_cell2.innerHTML = detail;
  row_cell3.innerHTML = time;
}
