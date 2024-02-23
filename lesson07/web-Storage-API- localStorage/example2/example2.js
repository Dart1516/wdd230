// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitDisplay = document.querySelector(".visits");

//get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

//determine if this is the first visit or display the number of visits

if (numVisits !==0) {
	visitDisplay.textContent = numVisits;	
} else {
	visitDisplay.textContent='This is your first visit!';
}

// increment of visit
numVisits++

//store the new number of visit value
localStorage.setItem("visits-ls", numVisits)

todayDisplay.textContent=Date.now();