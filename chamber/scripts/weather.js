const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescription = document.querySelector('#weather-description');
const weatherDetails = document.querySelector('#weather-details');
const weatherTime = document.querySelector('#weather-time');
const weatherLocation = document.querySelector('#weather-location');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-23.64&lon=-46.61&appid=9bdbd0d95ed9aa366457a019676f1adb&units=metric';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

// Calculate wind chill
// this calculate was took from https://www.freemathhelp.com/wind-chill/
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
      const windChill =
        13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16);
      return windChill.toFixed(2);
    } else {
      return "N/A";
    }
  }

  

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;C`;
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    weatherDescription.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    weatherDetails.innerHTML = `Chance of precipitation: ${data.clouds.all}%<br>Humidity: ${data.main.humidity}%<br>Wind: ${data.wind.speed} km/h <br>Wind Chill: ${calculateWindChill(data.main.temp, data.wind.speed)}`;
    const date = new Date(data.dt * 1000);
    const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true };
    weatherTime.textContent = date.toLocaleString('en-US', options);
    weatherLocation.textContent = data.name;
}