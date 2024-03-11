const nameEl = document.querySelector("#name");
const regionEl = document.querySelector("#region");
const countryEl = document.querySelector("#country");
const tempEl = document.querySelector("#temp");
const conditionTextEl = document.querySelector("#condition-text");
const condtiionIconEl = document.querySelector("#condition-icon");

const morningTempEl = document.querySelector("#morning-temp");
const afternoonTempEl = document.querySelector("#afternoon-temp");
const eveningTempEl = document.querySelector("#evening-temp");
const nightTempEl = document.querySelector("#night-temp");

const dateEl = document.querySelector(".date");
const dayEls = document.querySelectorAll(".day");

const weeklyIcons = document.querySelectorAll(".weekly-icon");
const weeklyTemps = document.querySelectorAll(".weekly-temp");

const windSpeed = document.querySelector("#wind-speed");
const windDegreeAndDir = document.querySelector("#degree-dir");

const uvIndexP = document.querySelector("#uv-index");

const sunriseP = document.querySelector("#sunrise-time");
const sunsetP = document.querySelector("#sunset-time");

const humidityP = document.querySelector("#humidity");
const visibilityP = document.querySelector("#visibility");
const feelsLikeP = document.querySelector("#feels-like");

export function updateUi(weatherData) {
  nameEl.textContent = weatherData.name;
  regionEl.textContent = `${weatherData.region}, `;
  countryEl.textContent = weatherData.country;
  tempEl.textContent = weatherData.temp + "° C";
  conditionTextEl.textContent = weatherData.condition;

  switch (true) {
    case weatherData.condition.toLowerCase().includes("clear"):
      if (weatherData.isDay == 1) {
        weatherData.conditionIcon =
          "https://img.icons8.com/3d-fluency/188/sun.png";
      } else {
        weatherData.conditionIcon =
          "https://img.icons8.com/3d-fluency/188/moon-symbol.png";
      }
      break;
    case weatherData.condition.toLowerCase().includes("cloud"):
      weatherData.conditionIcon =
        "https://img.icons8.com/3d-fluency/188/private-cloud-storage";
      break;
    case weatherData.condition.toLowerCase().includes("rain"):
      weatherData.conditionIcon = "https://img.icons8.com/3d-fluency/188/storm";
      break;
    case weatherData.condition.toLowerCase().includes("snow"):
      weatherData.conditionIcon = "https://img.icons8.com/3d-fluency/188/snow";
      break;
    case weatherData.condition.toLowerCase().includes("sun"):
      weatherData.conditionIcon =
        "https://img.icons8.com/3d-fluency/188/sun.png";
    default:
      weatherData.conditionIcon =
        "https://img.icons8.com/3d-fluency/188/sun.png";
  }

  condtiionIconEl.src = weatherData.conditionIcon;

  morningTempEl.textContent = weatherData.morningTemp + "° C";
  afternoonTempEl.textContent = weatherData.afternoonTemp + "° C";
  eveningTempEl.textContent = weatherData.eveningTemp + "° C";
  nightTempEl.textContent = weatherData.nightTemp + "° C";

  let date = new Date();
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();
  date = `${day}, ${month} ${date.getDate()}, ${year}`;
  dateEl.textContent = date;

  windSpeed.textContent = weatherData.windSpeed + " km/h";
  windDegreeAndDir.textContent =
    weatherData.windDegree + "°" + weatherData.windDir;

  uvIndexP.textContent = weatherData.uv + " UV";
  sunriseP.textContent = weatherData.sunrise;
  sunsetP.textContent = weatherData.sunset;

  humidityP.textContent = weatherData.humidity + "%";
  visibilityP.textContent = weatherData.visibility + "km";
  feelsLikeP.textContent = weatherData.feelslike + "° C"; 
}

export function updateHourlyGraph(weatherData) {
  const canvas = document.getElementById("temp-chart").getContext("2d");
  const labels = ["", "", "", ""];
  const data = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        tension: 0.4,
        pointStyle: "circle",
        data: [
          weatherData.morningTemp,
          weatherData.afternoonTemp,
          weatherData.eveningTemp,
          weatherData.nightTemp,
        ],
        borderColor: "#bf8000", // Red line
      },
    ],
  };
  const myChart = new Chart(canvas, {
    type: "line", // Specify the chart type (line in this case)
    data: data,
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
  return myChart;
}

export function updateUvgGauge(weatherData) {
  const ctx = document.querySelector("#uv-index-canvas").getContext("2d");
  const value = weatherData.uv;
  const guageChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [value, 12 - value],
          backgroundColor: ["#bf8000", "#5f481d"],
          borderWidth: 0
        },
      ],
    },
    options: {
      cutoutPercentage: 0, // Adjust for gauge thickness
      rotation: 270, // Start at bottom
      circumference: 180, // Half circle
      legend: {
        display: false // Hide legend
      },
      ticks: {
        display: true, // Hide default ticks
        min: 0,
        max: 11,
        stepSize: 1,
      },
      fontColor: "#fff",
      animation: {
        animateRotate: true, // Disable rotation animation
        animateScale: false  // Enable scale animation (optional)
      }
    },
  });
  return guageChart;
}

export function updateWeeklyForecast(weatherData) {
  for (let i = 0; i < dayEls.length; i++) {
    const formatedDate = convertDateToText(weatherData.days[i].date);
    dayEls[i].textContent = formatedDate;

    switch (true) {
      case weatherData.days[i].condition.toLowerCase().includes("clear"):
        if (weatherData.isDay == 1) {
          weatherData.days[i].conditionIcon =
            "https://img.icons8.com/3d-fluency/188/sun.png";
        } else {
          weatherData.days[i].conditionIcon =
            "https://img.icons8.com/3d-fluency/188/moon-symbol.png";
        }
        break;
      case weatherData.days[i].condition.includes("cloud"):
        weatherData.conditionIcon =
          "https://img.icons8.com/3d-fluency/188/private-cloud-storage";
        break;
      case weatherData.days[i].condition.toLowerCase().includes("rain"):
        weatherData.days[i].conditionIcon =
          "https://img.icons8.com/3d-fluency/188/storm";
        break;
      case weatherData.days[i].condition.toLowerCase().includes("snow"):
        weatherData.days[i].conditionIcon =
          "https://img.icons8.com/3d-fluency/188/snow";
        break;
      case weatherData.days[i].condition.toLowerCase().includes("sun"):
        weatherData.days[i].conditionIcon =
          "https://img.icons8.com/3d-fluency/188/sun.png";
      default:
        weatherData.days[i].conditionIcon =
          "https://img.icons8.com/3d-fluency/188/sun.png";
    }
    weeklyIcons[i].src = weatherData.days[i].conditionIcon;
    weeklyTemps[i].textContent = weatherData.days[i].temp + "°";
  }
}

function convertDateToText(dateString) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dateObject = daysOfWeek[new Date(dateString).getDay()];
  return dateObject;
}

export function resetUi() {
  nameEl.textContent = "";
  regionEl.textContent = "";
  countryEl.textContent = "";
  tempEl.textContent = "";
  conditionTextEl.textContent = "";
  condtiionIconEl.src = "#"

  morningTempEl.textContent = "";
  afternoonTempEl.textContent = "";
  eveningTempEl.textContent = "";
  nightTempEl.textContent = "";

  dateEl.textContent = "";
  dayEls.forEach((element) => {
    element.textContent = "";
  })
  weeklyIcons.forEach((icon) => {
    icon.src = "#"
  })
  weeklyTemps.forEach((temp) => {
    temp.textContent = "";
  })
  windSpeed.textContent = "";
  windDegreeAndDir.textContent = "";
  uvIndexP.textContent = "";
  sunriseP.textContent = "";
  sunsetP.textContent = "";
}