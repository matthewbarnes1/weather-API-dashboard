# Pseudo Code for weather dashboard using API
# GIVEN a weather dashboard with form inputs

### WHEN I search for a city
#### --> THEN I am presented with current and future conditions for that city and that city is added to the search history
- Search form
- Input for text, and button for submit
- Database of cities
- City weather conditions 
- Search history (localStorage) for previously searched cities 
#

### WHEN I view current weather conditions for that city
#### --> THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
- Main card, holds info: city, date, weather codndition icon, temp, humidity, wind speed
- Use the search form input to query weather API database and display to card

#

### WHEN I view future weather conditions for that city
#### --> THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
- 5 cards for each day 1-5 forecast
- Same process as city weather conditions, but now query for 5 day forecast
#

### WHEN I click on a city in the search history
#### --> THEN I am again presented with current and future conditions for that city
- Search history shows as individual buttons (addElement in javascript) beneath search button
- Use button input to provide search for conditions 

# General step-step
1. Organize files / import any API's needed
- Openweather api
- Bootstrap styling
- Index, script, style-sheets

2. Develop basic page format and functionality 
- Static header 
- Input text box for city search 
- Buttons for search history
- Element query for javascript capability
- Save previous searches using localstorage and JS 
- Eventlistener for text input and buttons 
- Element creation for history buttons using localstorage

3. OpenWeather query
- Use city to pull weather data: temp, wind, etc.


