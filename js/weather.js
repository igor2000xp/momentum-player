const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const cityInput = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error')

const cities = {city:'Minsk'};
getLocalStorageCity();


function getCityInput() {
  cities.city = cityInput.value;
  setLocalStorageCity();
  getWeather();
}

function setLocalStorageCity() {
  localStorage.setItem('city', cities.city);
}

function getLocalStorageCity() {
  if(localStorage.getItem('city')) {
    cities.city = localStorage.getItem('city');
  }
}

async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cities.city}&lang=en&appid=5984893ced67a1b978dd308411036167&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 

  if(data.message != undefined) {
    weatherError.textContent = `Error! city not found for '${cities.city}'`;
    weatherIcon.className = '';
    weatherIcon.classList.remove();
    temperature.textContent = ``;
    weatherDescription.textContent = "";
    wind.textContent = ``;
    humidity.textContent = ``;
  }else {
    weatherError.textContent = ``;
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);

    let tempRound = Math.round(data.main.temp);
    temperature.textContent = `${tempRound}°C`;

    weatherDescription.textContent = data.weather[0].description;
    let windRound = Math.round(data.wind.speed);
    wind.textContent = `Wind speed: ${windRound} m/c`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    }
  setTimeout(getWeather, 600000);
}


cityInput.addEventListener('change', getCityInput);
getWeather();
cityInput.value = cities.city;