var APIKey = "1732282d0466ef819c6dfdd2f9bf0e5c";

const btnInput = document.getElementById('search-button');

btnInput.addEventListener('click', myFunction);

var clickCount = 0;

function myFunction() {
    var city = document.getElementById('text-input');

        if(city.value.length == 0){
            alert("ERROR: Input Required (City)");
        }
        else{
            var city = document.getElementById('text-input').value;
            console.log(city);
            localStorage.setItem('cityName', city);
            clickCount++;
        }
        console.log(clickCount);

        //TODO: Use city value to concatinate queryURL

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    // console.log(queryURL);

    // TODO: Fetch data from Weather API using queryURL
    

}