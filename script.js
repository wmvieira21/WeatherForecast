searchButton.addEventListener('click', featchWeather);

function featchWeather(event) {
    var cityName = cityInput.value;

    if (cityName.trim().length == 0) {
        return alert("Please enter a name!");
    }

    loader.style.display = 'block';

    var http = new XMLHttpRequest();
    var method = "GET";
    var apiKey = "3c9a39ecd7afc44f2227056dac2f6581";
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=metric';

    http.open(method, url);

    http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE
            && http.status === 200) {
            var data = JSON.parse(http.responseText);

            var weatherData = new Weather(cityName, data.weather[0].description, data.main.temp.toFixed(), data.sys.country);
            weatherData.temperatureF = data.main.temp;
            updateWeather(weatherData);

            console.log(data);
        } else if (http.readyState === XMLHttpRequest.DONE) {

            loader.style.display = 'none';
            weatherInfoBox.style.display = 'none';

            alert("Something went wrong! Error:" + http.response.split(',')[1]);
        }
    };
    http.send();
}


function updateWeather(weatherData) {
    weatherCityName.innerHTML = weatherData.cityName.toUpperCase();
    weatherDesc.innerHTML = weatherData.description;
    weatherTempCelsius.innerHTML = weatherData.temperatureCelsius;
    weatherTempF.innerHTML = weatherData._temperatureF;
    weatherCountry.innerHTML = weatherData.country;

    loader.style.display = 'none';
    weatherInfoBox.style.display = 'flex';
}