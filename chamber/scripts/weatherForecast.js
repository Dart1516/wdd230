const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=23.33&lon=46.38&appid=9bdbd0d95ed9aa366457a019676f1adb&units=metric';

async function apiForecastFetch() {
  try {
      const response = await fetch(url2);
      if (response.ok) {
          const data = await response.json();
          displayForecastResults(data);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
      console.log(error);
  }
}

function displayForecastResults(data) {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  
  for (let forecastDay = 0; forecastDay < 3; forecastDay++) {
      const dayData = data.list[forecastDay * 8]; // Select the first data of each day (every 8 indices in the list)
      const timestamp = dayData.dt * 1000; // Get the timestamp in milliseconds
      let dateObj = new Date(timestamp);   // Create a Date object from the timestamp
      let maxTemp = -Infinity; // Initialize variables to hold maximum and minimum temperatures
      let minTemp = Infinity;
      let weatherIcon = ''; // Initialize variable to hold weather icon URL

      // Loop through the data for the current day
      data.list.forEach(item => {
          const itemDate = new Date(item.dt * 1000);
          // Check if the item belongs to the same day
          if (itemDate.getDate() === dateObj.getDate()) {
              // Update maximum and minimum temperatures if necessary
              maxTemp = Math.max(maxTemp, item.main.temp_max);
              minTemp = Math.min(minTemp, item.main.temp_min);
              // Get the weather icon for this day
              weatherIcon = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
          }
      });

      const currentDayElement = document.getElementById(`day${forecastDay + 1}`);
      const dayOfWeekNumber = dateObj.getDay(); // Get the day of the week as a number
      currentDayElement.querySelector('div').textContent = daysOfWeek[dayOfWeekNumber]; // Update day name
      currentDayElement.querySelector('#day' + (forecastDay + 1) + '-max-temp').textContent = maxTemp.toFixed(0); // Update maximum temperature
      currentDayElement.querySelector('#day' + (forecastDay + 1) + '-min-temp').textContent = minTemp.toFixed(0); // Update minimum temperature
      currentDayElement.querySelector('#img_' + (forecastDay + 1)).setAttribute('src', weatherIcon); // Update weather icon
  }
}

apiForecastFetch();