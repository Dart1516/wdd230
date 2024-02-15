const ButtonImage = document.getElementById("ButtonImage");
let imagenActual = 1;

ButtonImage.addEventListener("click", function () {
  // Cambiar la clase del botón cuando se hace clic
  document.body.classList.toggle("slytherin-mode");
});

ButtonImage.addEventListener("click", () => {
  
  ButtonImage.style.opacity = 0; // Reducir la opacidad
  setTimeout(() => {
    if (imagenActual === 1) {
      ButtonImage.src = "img/img2.png";
      imagenActual = 2;
      
    } else {
      ButtonImage.src = "img/img1.png";
      imagenActual = 1;
    }
    ButtonImage.style.opacity = 1; // Restaurar la opacidad después del cambio
  }, 100); // Espera 500 milisegundos antes de cambiar la imagen
});