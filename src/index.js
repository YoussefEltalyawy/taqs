import { updateUi } from "./ui";

function getLocation() {
  const location = prompt("Please enter your location:");
  return location;
}

async function getWeather() {
  const location = getLocation();
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=b40bbce6ac554f4fbf1142551240203&q=${location}`,
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
    const canvas = document.getElementById("temp-chart").getContext("2d");
    const labels = ["", "", "", "",];
    const data = {
      labels,
      datasets: [
        {
          label: "Temperature (°C)",
          tension: .5,
          pointStyle: "circle",
          data: [weatherData.morningTemp, weatherData.afternoonTemp, weatherData.eveningTemp, weatherData.nightTemp,],
          borderColor: "#bf8000", // Red line
        },
        
      ],
    };
    const myChart = new Chart(canvas, {
      type: 'line', // Specify the chart type (line in this case)
      data: data,
      options: {
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false,
              // drawOnChartArea: false
            },
            ticks: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
    
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
  };
  switch (true) {
    case conditionText.toLowerCase().includes("cloud"):
      console.log("Cloudy condition");
      weatherData.conditionIcon =
        "https://img.icons8.com/3d-fluency/188/private-cloud-storage";
      break;
    case conditionText.toLowerCase().includes("rain"):
      weatherData.conditionIcon = "https://img.icons8.com/3d-fluency/188/storm";
      console.log("Rain condition");
      break;
    case conditionText.toLowerCase().includes("snow"):
      weatherData.conditionIcon = "https://img.icons8.com/3d-fluency/188/snow";
      console.log("Snow condition");
      break;
    case conditionText.toLowerCase().includes("sun"):
      console.log("Sun condition");
      weatherData.conditionIcon =
        "https://img.icons8.com/3d-fluency/188/sun.png";
    default:
      weatherData.conditionIcon =
        "https://img.icons8.com/3d-fluency/188/sun.png";
  }
  return weatherData;
}
getWeather();
