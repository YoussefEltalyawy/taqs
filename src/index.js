import { updateUi } from "./ui";
import { updateHourlyGraph } from "./ui";

function getLocation() {
  const location = prompt("Please enter your location:");
  return location;
}

async function getWeather() {
  const location = getLocation();
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=b40bbce6ac554f4fbf1142551240203&q=${location}&days=9`,
      { mode: "cors" }
    );
    const weatherDataJson = await response.json();
    const weatherData = formatWeatherJson(weatherDataJson);
    updateUi(
      weatherData.name,
      weatherData.region,
      weatherData.country,
      weatherData.temp,
      weatherData.condition,
      weatherData.conditionIcon,
      weatherData.morningTemp,
      weatherData.afternoonTemp,
      weatherData.eveningTemp,
      weatherData.nightTemp
    );
    updateHourlyGraph(
      weatherData.morningTemp,
      weatherData.afternoonTemp,
      weatherData.eveningTemp,
      weatherData.nightTemp
    );
  } catch (error) {
    console.log(error);
  }
}
function formatWeatherJson(weatherDataJson) {
  const conditionText = weatherDataJson.current.condition.text;
  const weatherData = {
    name: weatherDataJson.location.name,
    region: weatherDataJson.location.region,
    country: weatherDataJson.location.country,
    temp: weatherDataJson.current.temp_c,
    isDay: weatherDataJson.current.is_day,
    condition: weatherDataJson.current.condition.text,
    conditionIcon: null,
    windSpeed: weatherDataJson.current.wind_kph,
    uv: weatherDataJson.current.uv,
    humidity: weatherDataJson.current.humidity,
    visibility: weatherDataJson.current.vis_km,
    feelslike: weatherDataJson.current.feelslike_c,
    morningTemp: weatherDataJson.forecast.forecastday[0].hour[6].temp_c,
    afternoonTemp: weatherDataJson.forecast.forecastday[0].hour[12].temp_c,
    eveningTemp: weatherDataJson.forecast.forecastday[0].hour[18].temp_c,
    nightTemp: weatherDataJson.forecast.forecastday[0].hour[21].temp_c,
    day1Date: weatherDataJson.forecast.forecastday[1].date,
    day1Temp: weatherDataJson.forecast.forecastday[1].day.avgtemp_c,
    day2Date: weatherDataJson.forecast.forecastday[2].date,
    day2Temp: weatherDataJson.forecast.forecastday[2].day.avgtemp_c,
    day3Date: weatherDataJson.forecast.forecastday[3].date,
    day3Temp: weatherDataJson.forecast.forecastday[3].day.avgtemp_c,
    day4Date: weatherDataJson.forecast.forecastday[4].date,
    day4Temp: weatherDataJson.forecast.forecastday[4].day.avgtemp_c,
    day5Date: weatherDataJson.forecast.forecastday[5].date,
    day5Temp: weatherDataJson.forecast.forecastday[5].day.avgtemp_c,
    day6Date: weatherDataJson.forecast.forecastday[6].date,
    day6Temp: weatherDataJson.forecast.forecastday[6].day.avgtemp_c,
    day7Date: weatherDataJson.forecast.forecastday[7].date,
    day7Temp: weatherDataJson.forecast.forecastday[7].day.avgtemp_c,
  };
  switch (true) {
    case conditionText.toLowerCase().includes("cloud"):
      weatherData.conditionIcon =
        "https://img.icons8.com/3d-fluency/188/private-cloud-storage";
      break;
    case conditionText.toLowerCase().includes("rain"):
      weatherData.conditionIcon = "https://img.icons8.com/3d-fluency/188/storm";
      break;
    case conditionText.toLowerCase().includes("snow"):
      weatherData.conditionIcon = "https://img.icons8.com/3d-fluency/188/snow";
      break;
    case conditionText.toLowerCase().includes("sun"):
      weatherData.conditionIcon =
        "https://img.icons8.com/3d-fluency/188/sun.png";
    default:
      weatherData.conditionIcon =
        "https://img.icons8.com/3d-fluency/188/sun.png";
  }
  return weatherData;
}
getWeather();
