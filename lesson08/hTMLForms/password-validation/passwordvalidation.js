const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}
// otro ejemplo.
function comprobarClave() {
    let clave1 = document.f1.clave1.value
    let clave2 = document.f1.clave2.value

    if (clave1 == clave2) {
       alert("Las dos claves son iguales...\nRealizaríamos las acciones del caso positivo")
    } else {
       alert("Las dos claves son distintas...\nRealizaríamos las acciones del caso negativo")
    }
}

// primer ejemplo.
const pwd1 = document.querySelector("#contraseña");
const pwd2 = document.querySelector("#contraseña2");
const msg = document.querySelector("#formmessage2");

pwd2.addEventListener("input", checkSame2);

function checkSame2() {
    if (pwd1.value !== pwd2.value) {
        msg.textContent = " Password do not macht❗";
        msg.style.visibility = "show";
        pwd2.style.backgroundColor = "#fff0f3";
    } else {
        msg.style.display = "none";
        pwd2.style.backgroundColor = "#fff";
        pwd2.style.color = "#000";
    }
}