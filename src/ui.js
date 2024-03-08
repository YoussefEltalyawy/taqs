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

export function updateUi(
  conditionTextFore,
  weatherData,
) {
  nameEl.textContent = weatherData.name;
  regionEl.textContent = `${weatherData.region}, `;
  countryEl.textContent = weatherData.country;
  tempEl.textContent = weatherData.temp + "° C";
  conditionTextEl.textContent = weatherData.condition;

  switch (true) {
    case conditionTextFore.toLowerCase().includes("clear"):
      if (weatherData.isDay == 1) {
        weatherData.conditionIcon =
          "https://img.icons8.com/3d-fluency/188/sun.png";
      } else {
        weatherData.conditionIcon =
          "https://img.icons8.com/3d-fluency/188/moon-symbol.png";
      }
      break;
    case conditionTextFore.toLowerCase().includes("cloud"):
      weatherData.conditionIcon =
        "https://img.icons8.com/3d-fluency/188/private-cloud-storage";
      break;
    case conditionTextFore.toLowerCase().includes("rain"):
      weatherData.conditionIcon = "https://img.icons8.com/3d-fluency/188/storm";
      break;
    case conditionTextFore.toLowerCase().includes("snow"):
      weatherData.conditionIcon = "https://img.icons8.com/3d-fluency/188/snow";
      break;
    case conditionTextFore.toLowerCase().includes("sun"):
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
  console.log(conditionTextFore);
}

export function updateHourlyGraph(
  weatherData
) {
  const canvas = document.getElementById("temp-chart").getContext("2d");
  const labels = ["", "", "", ""];
  const data = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        tension: 0.4,
        pointStyle: "circle",
        data: [weatherData.morningTemp, weatherData.afternoonTemp, weatherData.eveningTemp, weatherData.nightTemp],
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
            // drawOnChartArea: false
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
}

export function updateWeeklyForecast(weatherData) {
  for (let i = 0; i < dayEls.length; i++) {
    const formatedDate = convertDateToText(weatherData.days[i].date);
    dayEls[i].textContent = formatedDate;
  }
}

function convertDateToText(dateString) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateObject = daysOfWeek[new Date(dateString).getDay()];
  console.log(dateObject);
  return dateObject;
}

// convertDateToText();
