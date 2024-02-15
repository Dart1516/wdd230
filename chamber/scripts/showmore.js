/*// la función normal quedaría 
function toggleMore() {
    // Obtiene el elemento con el id more-content
    let more = document.getElementById("more-content");
    // Obtiene el elemento con el id show-more
    let show = document.getElementById("show-more");
    // Si el contenido está oculto, lo muestra y cambia el texto del enlace
    if (more.style.display == "none") {
        more.style.display = "block";
        show.textContent = "Show less";
    // Si el contenido está visible, lo oculta y cambia el texto del enlace
    } else {
        more.style.display = "none";
        show.textContent = "Show more";
    }
}
*/
// en arrow function quedaría: 
let toggleMore = () => {
    let more = document.getElementById("more-content");
    let show = document.getElementById("show-more");
    if (more.style.display == "none") {
        more.style.display = "block";
        show.textContent = "Show less";
    } else {
        more.style.display = "none";
        show.textContent = "Show more";
    }
}

