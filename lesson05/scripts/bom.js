//01 paso 1 In your js file, declare three const variables that hold references to the input, button, and list elements.

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

/*UNA FUNCION FLECHA ES ALGO TAN SENCILLLO COMO:?
let funcionejemplo = () => 'esta es mi funcion'*/

/*02 Create a click event listener for the Add Chapter button using addEventListener and an anonymous function or arrow function.*/

button.addEventListener("click", () => {
  //In the click event function block {...}, do the following:

  if (input.value.trim() !=='') {
    //create a delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
        //populate the button textContent with a ❌
        deleteButton.textContent = "❌";

    //append the li element with the delete button
    li.appendChild(deleteButton);

    //populate the li elements textContent or innerHTML with the input value
    li.textContent = input.value;

    //append the li element to the unordered list in your HTML
    li.append(deleteButton);
    list.append(li);
    //add an event listener to the delete button that removes the li element when clicked

    deleteButton.addEventListener("click", ()=> {
  list.removeChild(li);
  input.focus();
});

input.focus();
input.value = "";
  }else {
    // Si el campo de entrada está vacío, enfocar en el input para que el usuario pueda ingresar datos
    input.focus();
}

});
    