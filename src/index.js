import { updateUi } from "./ui";
import { updateHourlyGraph } from "./ui";
import { updateWeeklyForecast } from "./ui";

function getLocation() {
  const location = prompt("Please enter your location:");
  return location;
}

async function getWeather() {
  const location = getLocation();
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=b40bbce6ac554f4fbf1142551240203&q=${location}&days=10`,
      { mode: "cors" }
    );
    const weatherDataJson = await response.json();
    const weatherData = formatWeatherJson(weatherDataJson);
    updateUi(
      weatherData,
    );
    updateHourlyGraph(
      weatherData
    );
    updateWeeklyForecast(weatherData);
  } catch (error) {
    console.log(error);
  }
}
function formatWeatherJson(weatherDataJson) {
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
    days: {
      0: {
        date: weatherDataJson.forecast.forecastday[1].date,
        temp: weatherDataJson.forecast.forecastday[1].day.avgtemp_c,
        condition: weatherDataJson.forecast.forecastday[1].day.condition.text,
        conditionIcon: null,
      },
      1: {
        date: weatherDataJson.forecast.forecastday[2].date,
        temp: weatherDataJson.forecast.forecastday[2].day.avgtemp_c,
        condition: weatherDataJson.forecast.forecastday[2].day.condition.text,
        conditionIcon: null,
      },
      2: {
        date: weatherDataJson.forecast.forecastday[3].date,
        temp: weatherDataJson.forecast.forecastday[3].day.avgtemp_c,
        condition: weatherDataJson.forecast.forecastday[3].day.condition.text,
        conditionIcon: null,
      },
      3: {
        date: weatherDataJson.forecast.forecastday[4].date,
        temp: weatherDataJson.forecast.forecastday[4].day.avgtemp_c,
        condition: weatherDataJson.forecast.forecastday[4].day.condition.text,
        conditionIcon: null,
      },
      4: {
        date: weatherDataJson.forecast.forecastday[5].date,
        temp: weatherDataJson.forecast.forecastday[5].day.avgtemp_c,
        condition: weatherDataJson.forecast.forecastday[5].day.condition.text,
        conditionIcon: null,
      },
      5: {
        date: weatherDataJson.forecast.forecastday[6].date,
        temp: weatherDataJson.forecast.forecastday[6].day.avgtemp_c,
        condition: weatherDataJson.forecast.forecastday[6].day.condition.text,
        conditionIcon: null,
      },
      6: {
        date: weatherDataJson.forecast.forecastday[7].date,
        temp: weatherDataJson.forecast.forecastday[7].day.avgtemp_c,
        condition: weatherDataJson.forecast.forecastday[7].day.condition.text,
        conditionIcon: null,
      },
      7: {
        date: weatherDataJson.forecast.forecastday[8].date,
        temp: weatherDataJson.forecast.forecastday[8].day.avgtemp_c,
        condition: weatherDataJson.forecast.forecastday[8].day.condition.text,
        conditionIcon: null,
      },
      8: {
        date: weatherDataJson.forecast.forecastday[9].date,
        temp: weatherDataJson.forecast.forecastday[9].day.avgtemp_c,
        condition: weatherDataJson.forecast.forecastday[9].day.condition.text,
        conditionIcon: null,
      }
    },
  };
  return weatherData;
}
getWeather();
