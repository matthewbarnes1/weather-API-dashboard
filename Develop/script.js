//! Took the time to add comments/notation, so I can understand what I wrote down the line!
//! Enjoy !

//* setInterval will refresh every (1000ms)
//* Const time uses the dayjs api to get current date
//* document.getElementByID('timel) gets the time element in html
//* .innerHTML will edit the html of that element, and set it = the time constant from dayjs
setInterval(function () {
  const time = dayjs().format("MMMM D, YYYY");
  document.getElementById("timeEl").innerHTML = time;
}, 1000);

//* btnInput is a constant that refers to the 'search-button' element in HTML
//* addEventListener listens for a click, and performs the grabWeather function upon click
const btnInput = document.getElementById("search-button");
btnInput.addEventListener("click", grabWeather);

//* grabWeather function is the main powerhouse behind the scenes
//* Contains two seperate child functions, one for today's weather and one for the 5-day forecast
function grabWeather() {
  //* APIKey contains the value of the API key used to contact the api for data
  //* city variable containts the value of text-input for specific city query
  var APIKey = "1732282d0466ef819c6dfdd2f9bf0e5c";
  var city = document.getElementById("text-input").value;

//* fetchWeather function, grabs the current weather data from API
  function fetchWeather() {
//* weatherUrl variable concatinates api link, city variable from user input, and apiKey
    var weatherUrl =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      APIKey;
//* These variables querySelect html elements, so we can edit them later on
    var nameEl = document.querySelector(".cityName");
    var tempEl = document.querySelector(".temp");
    var windSpeedEl = document.querySelector(".wind");
    var humidityEl = document.querySelector(".humidity");
//* This uses the concatinated weatherUrl to fetch data, in json format
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((data) => {
//* Sets variables for the json data requested
        var temperature = (data.main.temp - 273.15).toFixed(2) + "°C";
        var cityName = data.name;
        var windSpeed = data.wind.speed;
        var humidVar = data.main.humidity;
//* Uses .textcontent to change the value of html elements, to the data from .then request
        nameEl.textContent = cityName;
        tempEl.textContent = temperature;
        windSpeedEl.textContent = windSpeed + " mph";
        humidityEl.textContent = humidVar + "%";
      });
  }

// * Similar to fetchWeather, although for the forecast.
  function fetchForecast() {
// * This variable holds the forecast API link and concatinates with api key to access
    var forecastUrl =
      "http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=" +
      APIKey;

// * This fetch uses the forecasturl api as mentioned above
    fetch(forecastUrl)
// * This will prompt response in json format, good to parse
      .then((response) => response.json())
      .then((data) => {
        var weatherCardsContainer = document.getElementById("weatherCards");
//* For loop used to get all 5 days and corresponding data points
        for (var i = 0; i < 5; i++) {
          var date = data.list[i].dt_txt;
          var temp = data.list[i].main.temp;
          var wind = data.list[i].wind.speed;
          var humidity = data.list[i].main.humidity;

          var card = document.createElement("div");
          card.className = "weatherCard";
//* Changes value of elements within weatherCard
          card.innerHTML = `
        <h3>${date}</h3>
        <p>Temperature: ${(temp - 273.15).toFixed(2)}°C</p>
        <p>Wind Speed: ${wind} m/s</p>
        <p>Humidity: ${humidity}%</p>
      `;
          weatherCardsContainer.appendChild(card);
        }
      });
  }
//* Calls upon both functions to run program
  fetchWeather();
  fetchForecast();
}

//! Thank you for reading !
