/*is inside of a fuction to be sure of load without error*/
document.addEventListener("DOMContentLoaded", function () {
  const visitDisplay = document.querySelector(".visits");

  let numVisits = Number(window.localStorage.getItem("visits-ls")) || 0;

  if (numVisits !== 0) {
    visitDisplay.textContent = numVisits;
  } else {
    visitDisplay.textContent = "This is your first visit!";
  }

  numVisits++;
  localStorage.setItem("visits-ls", numVisits);
});
