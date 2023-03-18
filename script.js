// 5de962292b835c38f2944c3f21d46064
// https://openweathermap.org/img/wn/10d@2x.png
const cities = {
   tashkent: 1512569,
   moscow: 524894,
   yangiyul: 1512339,
   londonUK: 2643743,
   newYork: 5128581,
   saratov: 498677,
   kislovodsk: 548114
}
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();
console.log(month[date.getMonth()]);
console.log(date.getDate());
const weatherDate = document.querySelector(".weather-main__date");
const temp = document.querySelector('.weather-main__temp');
const weatherXHR = new XMLHttpRequest();
const cloudy = document.querySelector("#cloudy-icon");
const cloudyTitle = document.querySelector(".weather-main__cloudy");
const wind = document.querySelector(".weather-main__speed");
const humidity = document.querySelector(".weather-main__percent");
weatherDate.innerHTML = `Today, ${date.getDate()} ${month[date.getMonth()]}`;
weatherXHR.open('GET', `https://api.openweathermap.org/data/2.5/weather?id=${cities.tashkent}&appid=5de962292b835c38f2944c3f21d46064`);
weatherXHR.responseType = 'json';
const weatherOnload = weatherXHR.onload = () => {
   const weatherResp = weatherXHR.response;
   temp.innerHTML = Math.round(weatherResp.main.temp - 273.15) + "&deg;";
   cloudy.src = `https://openweathermap.org/img/wn/${weatherResp.weather[0].icon}@2x.png`;
   cloudyTitle.innerHTML = weatherResp.weather[0].description;
   wind.innerHTML = weatherResp.wind.speed + " m/s";
   humidity.innerHTML = weatherResp.main.humidity + " %";
};
weatherOnload;
const citiesArr = Object.values(cities);
const selectCity = document.querySelector(".weather__select");
selectCity.addEventListener("change", function() {
   weatherXHR.open('GET', `https://api.openweathermap.org/data/2.5/weather?id=${citiesArr[this.value]}&appid=5de962292b835c38f2944c3f21d46064`);
   weatherXHR.addEventListener("load", displayWeather())
   function displayWeather() {
      weatherOnload;
   }
   weatherXHR.send();
})
weatherXHR.send();