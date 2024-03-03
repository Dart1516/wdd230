const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const lastModifiedDate = document.getElementById('lastModified');
lastModifiedDate.textContent = document.lastModified;

const dateTimeHidden = document.getElementById('date-time');
const currentDateTime = Date.now();
dateTimeHidden.value = currentDateTime;
console.log(dateTimeHidden.value)