const form_element = document.getElementById("add_item");

form_element.addEventListener("submit", (event) => {
  event.preventDefault();
  let now_item = document.getElementById("item").value;
  console.log(now_item);
  form_element.reset();
});
