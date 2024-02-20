let apiKey = '';


let searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', async () => {
    let input = document.getElementById('input-text');

    let city = input.value;

    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let res = await fetch(Url);

    let responseData = await res.json();

    // console.log(responseData);

    let temprature = responseData["main"];

    let Weather = responseData["weather"];

    let WindSpeed = responseData["wind"];

    document.getElementById('speed').innerText = WindSpeed['speed'] + ' km/h';

    // console.log(WindSpeed['speed']);

    let WeatherCondition = Weather[0];

    let Humidity = temprature['humidity'];

    document.getElementById('per').innerText = Humidity + ' %'

    // console.log(Humidity);

    let season = WeatherCondition['main'];

    // console.log(WeatherCondition['main']);

    if(season === 'Haze'){
        document.getElementById('season-search').src = "./asset/drizzle.png";
    }else if(season === "Clouds") {
        document.getElementById('season-search').src = "./asset/clouds.png";
    }else if(season === "Rain") {
        document.getElementById('season-search').src = "./asset/rain.png";
    }else if(season === "Snow") {
        document.getElementById('season-search').src = "./asset/snow.png";
    }else if(season === "Summer") {
        document.getElementById('season-search').src = "./asset/snow.png";
    }

    document.getElementById('temprature').innerText = temprature['temp'] + '°C'

    // console.log(temprature['temp']);


    // console.log(responseData['name']);

    document.getElementById('city-name').innerText = responseData['name'];


});


