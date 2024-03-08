const nameEl = document.querySelector("#name");
const regionEl = document.querySelector("#region");
const countryEl = document.querySelector("#country");
const tempEl = document.querySelector("#temp");
const conditionTextEl = document.querySelector("#condition-text");
const condtiionIconEl = document.querySelector("#condition-icon");

export function updateUi(name, region, country,temp,conditionText, conditionIcon) {
  nameEl.textContent = name;
  regionEl.textContent = `${region}, `;
  countryEl.textContent = country;
  tempEl.textContent = temp + "° C";
  conditionTextEl.textContent = conditionText;
  condtiionIconEl.src = conditionIcon;
}