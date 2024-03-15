// select HTML elements in the document
  const currentTemp = document.querySelector('#current-temp');
  const weatherIcon = document.querySelector('#weather-icon');
  const captionDesc = document.querySelector('figcaption');


//Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.645&appid=9bdbd0d95ed9aa366457a019676f1adb&units=metric';

//Example
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();


// Example - Fill in the blanks.
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

/*
 referente a la explicación de como funciona la linea para transformar en mayusculas la primera letra

 desc.split(' '): Esto toma la cadena de texto desc y la divide en pedazos cada vez que encuentra un espacio en blanco. Imagina que tienes una frase y la estás cortando en pedazos cada vez que aparece un espacio.

map(word => word.charAt(0).toUpperCase()  agarra cada PRIMERA LETRA y la transforma en mayúscula 
+ word.slice(1)):  luego tomamos el resto de la palabra (word.slice(1)), es decir, todo lo que sigue después de la primera letra.

join(' '): Finalmente, juntamos todas estas palabras modificadas nuevamente en una sola cadena de texto, pero esta vez las unimos con un espacio en blanco. Así que volvemos a tener una frase, pero ahora con cada palabra empezando con una letra mayúscula.


*/