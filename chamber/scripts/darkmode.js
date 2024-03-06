document.addEventListener("DOMContentLoaded", () => {
  const ButtonImage = document.getElementById("ButtonImage");
  let imagenActual = 1;

  // This will load tje "dark mode if was selected before"
  const darkModeSaved = localStorage.getItem("modo");
  if (darkModeSaved === "slytherin-mode") {
      document.body.classList.add("slytherin-mode");
  }

  ButtonImage.addEventListener("click", function () {
      // change the mode
      const modoActual = document.body.classList.toggle("slytherin-mode");

      // save the mode pm the local storage
      localStorage.setItem("modo", modoActual ? "slytherin-mode" : "");
  });

  ButtonImage.addEventListener("click", () => {
      
      setTimeout(() => {
          if (imagenActual === 1) {
              ButtonImage.src = "img/img2.webp";
              imagenActual = 2;
          } else {
              ButtonImage.src = "img/img1.webp";
              imagenActual = 1;
          }
      }, 100); // wait 100 mili-seconds before change the image
  });
});