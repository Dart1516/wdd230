const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

// This is the code for Password validation
const pwd1 = document.querySelector("#pwd");
const pwd2 = document.querySelector("#pwd2");
const msg = document.querySelector("#formmessage2");

pwd2.addEventListener("input", checkSame2);

function checkSame2() {
    if (pwd1.value !== pwd2.value) {
        msg.textContent = " Passwords do not match❗";
        msg.style.visibility = "visible"; // Cambiado de "show" a "visible"
        pwd2.style.backgroundColor = "#fff0f3";
    } else {
        msg.textContent = ""; // Limpiar el mensaje cuando las contraseñas coinciden
        msg.style.visibility = "hidden"; // Ocultar el mensaje cuando las contraseñas coinciden
        pwd2.style.backgroundColor = "#fff";
        pwd2.style.color = "#000";
    }
}