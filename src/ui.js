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

export function updateUi(
  name,
  region,
  country,
  temp,
  conditionText,
  conditionIcon,
  morningTemp,
  afternoonTemp,
  eveningTemp,
  nightTemp,
) {
  nameEl.textContent = name;
  regionEl.textContent = `${region}, `;
  countryEl.textContent = country;
  tempEl.textContent = temp + "° C";
  conditionTextEl.textContent = conditionText;
  condtiionIconEl.src = conditionIcon;

  morningTempEl.textContent = morningTemp + "° C";
  afternoonTempEl.textContent = afternoonTemp + "° C";
  eveningTempEl.textContent = eveningTemp + "° C";
  nightTempEl.textContent = nightTemp + "° C";
}

let date = new Date();
const day = date.toLocaleDateString('en-US', { weekday: 'long' });
const month = date.toLocaleDateString('en-US', { month: 'long' });
const year = date.getFullYear();
date = `${day}, ${month} ${date.getDate()}, ${year}`;
dateEl.textContent = date
