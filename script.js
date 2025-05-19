const apikey = "1765c1fb7a84db010b2a51d38cf6787e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");
const loginContainer = document.querySelector(".login-container");
const weatherCard = document.querySelector(".card");

// Dummy login credentials
const validUsername = "user";
const validPassword = "pass123";

loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        loginContainer.style.display = "none";
        weatherCard.style.display = "block";
    } else {
        loginError.style.display = "block";
    }
});

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.getElementById("aqiLink").href = `https://www.google.com/search?q=Air+Quality+Index+${city}`;


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "mist.png";
    }
}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});
