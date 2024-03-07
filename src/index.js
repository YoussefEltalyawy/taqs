function getLocation() {
  const location = prompt("Please enter your location:");
  return location;
}

async function getWeather() {
  const location = getLocation();
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=b40bbce6ac554f4fbf1142551240203&q=${location}`,
      { mode: "cors" }
    );
    const weatherDataJson = await response.json();
    formatWeatherJson(weatherDataJson);
  } catch (error) {
    console.log(error);
  }
}
function formatWeatherJson(weatherDataJson){
  const weatherData = {
    name: weatherDataJson.location.name,
    region: weatherDataJson.location.region,
    country: weatherDataJson.location.country,
    temp: weatherDataJson.current.temp_c,
    isDay: weatherDataJson.current.is_day,
    condition: weatherDataJson.current.condition.text,
    windSpeed: weatherDataJson.current.wind_kph,
    uv: weatherDataJson.current.uv,
    humidity: weatherDataJson.current.humidity,
    visibility: weatherDataJson.current.vis_km,
    feelslike: weatherDataJson.current.feelslike_c,
  }
  console.log(weatherData.name);
  console.log(weatherData.region);
  console.log(weatherData.country);
  console.log(weatherData.temp);
  console.log(weatherData.isDay);
  console.log(weatherData.condition);
  console.log(weatherData.windSpeed);
  console.log(weatherData.uv);
  console.log(weatherData.humidity);
  console.log(weatherData.visibility);
  console.log(weatherData.feelslike);

  console.log("name is above")
}
getWeather();
