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

        var foreDates = [];
        var foreTemps = [];
        var foreWinds = [];
        var foreHumidity = [];

        for (var i = 0; i < 5; i++) {
          foreDates.push(data.list[i].dt_txt);
          foreTemps.push(data.list[i].main.temp);
          foreWinds.push(data.list[i].wind.speed);
          foreHumidity.push(data.list[i].main.humidity);

        }

        console.log(foreDates);
        console.log(foreTemps);
        console.log(foreWinds);
        console.log(foreHumidity);

      });
  }

  fetchWeather();
  fetchForecast();
}

// * This function is applying the dayjs time api to html time element (refreshing every 1000ms)
setInterval(function () {
  const time = dayjs().format("MMMM D, YYYY");
  document.getElementById("timeEl").innerHTML = time;
}, 1000);

//! The below if/else can be used to display alert if input = none;
//   if (city.value.length == 0) {
//     alert("ERROR: Input Required (City)");
//   } else {
//     console.log(city);
//     localStorage.setItem("cityName", city);
//     clickCount++;
//   }
