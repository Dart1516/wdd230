const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.645&appid=9bdbd0d95ed9aa366457a019676f1adb&units=metric';

async function apiFetch() {
try {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    console.log(data); // testing only
    displayResults(data); 
  } else {
      throw Error(await response.text());
  }
} catch (error) {
    console.log(error);
}
}

apiFetch();

function displayResults(data) {
//✅ Format the output to show zero decimal points.
// here we use .toFixed(0) but we could use Math.round(data.main.temp) or parseInt(data.main.temp)
currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;C`;
const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
let desc = data.weather[0].description;
//✅ Capitalize each word of the weather description.
desc = desc.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
weatherIcon.setAttribute('src', iconSrc);
weatherIcon.setAttribute('alt', desc);
captionDesc.textContent = `${desc}`;

}
