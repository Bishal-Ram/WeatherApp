const API_KEY = "807abcf239msh7043951d1b20552p1bacd4jsn4d9a2b219ee9";
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const response = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": API_KEY,
    },
  });

  const data = await response.json();
  console.log(data);
  return showWeather(data);
};

const showWeather = (data) => {
  console.log(data);
  weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="">
    </div>
    <div>
        <p>Temperature : ${data.temp} ℃</p>
        <p>Humidity : ${data.humidity} %</p>
        <h4> Clear </h4>
    </div>`
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});
