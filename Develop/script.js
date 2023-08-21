const btnInput = document.getElementById("search-button");
btnInput.addEventListener("click", myFunction);

var name = document.querySelector(".name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");

var city = document.getElementById("text-input");

var clickCount = 0;

function myFunction() {
  var city = document.getElementById("text-input").value;
  // * This is for de-bugging perposes console.log(city);

  var APIKey = "1732282d0466ef819c6dfdd2f9bf0e5c";
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey;

  function Fetchweather() {
    fetch(queryURL)
      .then((response) => response.json())
      .then((data) => {
        var temperature = data.main.temp;
        var cityName = data.name;
        var windSpeed = data.wind.speed;

        console.log("Temperature:", temperature);
        console.log("City Name:", cityName);
        console.log("Wind Speed:", windSpeed);
      });
  }
  Fetchweather();
}

//! The below if/else can be used to display alert if input = none;
//   if (city.value.length == 0) {
//     alert("ERROR: Input Required (City)");
//   } else {
//     console.log(city);
//     localStorage.setItem("cityName", city);
//     clickCount++;
//   }
