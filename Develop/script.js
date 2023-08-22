setInterval(function () {
  const time = dayjs().format("MMMM D, YYYY");
  document.getElementById("timeEl").innerHTML = time;
}, 1000);

const btnInput = document.getElementById("search-button");
btnInput.addEventListener("click", myFunction);

var city = document.getElementById("text-input");

var clickCount = 0;

function myFunction() {
  // * APIKey variable, from openweather website, used to access API.
  // * City variable, pulled from text-input box on html doc.
  var APIKey = "1732282d0466ef819c6dfdd2f9bf0e5c";
  var city = document.getElementById("text-input").value;

  // * Both APIKey & city, are used to concatinate the proper queryURL, with a unique city each input.
  var weatherUrl =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey;

  function fetchWeather() {
    var nameEl = document.querySelector(".cityName");
    var tempEl = document.querySelector(".temp");
    var windSpeedEl = document.querySelector(".wind");
    var humidityEl = document.querySelector(".humidity");

    fetch(weatherUrl)
      .then((response) => response.json())
      .then((data) => {
        var temperature = data.main.temp - 273.15;
        var cityName = data.name;
        var windSpeed = data.wind.speed;
        var humidVar = data.main.humidity;

        nameEl.textContent = cityName;
        tempEl.textContent = temperature;
        windSpeedEl.textContent = windSpeed + " mph";
        humidityEl.textContent = humidVar + "%";
      });
  }

  function fetchForecast() {
    var forecastUrl =
      "http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=" +
      APIKey;

  fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => {
      var weatherCardsContainer = document.getElementById("weatherCards");

      for (var i = 0; i < 5; i++) {
        var date = data.list[i].dt_txt;
        var temp = data.list[i].main.temp;
        var wind = data.list[i].wind.speed;
        var humidity = data.list[i].main.humidity;

        var card = document.createElement("div");
        card.className = "weatherCard";

        card.innerHTML = `
        <h3>${date}</h3>
        <p>Temperature: ${(temp-273.15).toFixed(2)}°C</p>
        <p>Wind Speed: ${wind} m/s</p>
        <p>Humidity: ${humidity}%</p>
      `;

        weatherCardsContainer.appendChild(card);
      
      }
    });


}
fetchWeather();
fetchForecast();
}

//! The below if/else can be used to display alert if input = none;
//   if (city.value.length == 0) {
//     alert("ERROR: Input Required (City)");
//   } else {
//     console.log(city);
//     localStorage.setItem("cityName", city);
//     clickCount++;
//   }
