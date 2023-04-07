const cities = {
   tashkent: 1512569,
   moscow: 524894,
   londonUK: 2643743,
   newYork: 5128581,
   saratov: 498677,
   dubai: 292223,
};
const citiesArr = Object.values(cities);
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const date = new Date();
const weatherDate = document.querySelector(".weather-main__date");
const temp = document.querySelector('.weather-main__temp');
const cloudy = document.querySelector("#cloudy-icon");
const cloudyTitle = document.querySelector(".weather-main__cloudy");
const wind = document.querySelector(".weather-main__speed");
const humidity = document.querySelector(".weather-main__percent");
const selectCity = document.querySelector(".weather__select");
weatherDate.innerHTML = `Today, ${date.getDate()} ${month[date.getMonth()]}`;
const weatherOnload = function onload(data) {
   temp.innerHTML = Math.round(data.main.temp - 273.15) + "&deg;";
   cloudy.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
   cloudyTitle.innerHTML = data.weather[0].description;
   wind.innerHTML = data.wind.speed + " m/s";
   humidity.innerHTML = data.main.humidity + " %";
}

fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cities.tashkent}&appid=5de962292b835c38f2944c3f21d46064`)
.then((response) => {
   return response.json();
})
.then((data) => {
   weatherOnload(data);
})

selectCity.addEventListener("change", function(){
   fetch(`https://api.openweathermap.org/data/2.5/weather?id=${citiesArr[this.value]}&appid=5de962292b835c38f2944c3f21d46064`)
   .then((response) => {
      return response.json();
   })
   .then((data) => {
      weatherOnload(data);
   })
})