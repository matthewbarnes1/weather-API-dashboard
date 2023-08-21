var APIKey = "1732282d0466ef819c6dfdd2f9bf0e5c";

const btnInput = document.getElementById('search-button');

btnInput.addEventListener('click', myFunction);

function myFunction() {
    const city = document.getElementById('text-input').value;
    // console.log(city);

        //TODO: Use city value to concatinate queryURL

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    // console.log(queryURL);

    // TODO: Fetch data from Weather API using queryURL
    

}