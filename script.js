import { calculateNetValue } from "./calculate.js";

const grossInput = document.getElementById("grossValue");
const kilometersInput = document.getElementById("kilometers");
const costsInput = document.getElementById("costs");
const formElement = document.getElementById("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const grossValue = parseFloat(grossInput.value);
  const kilometers = parseFloat(kilometersInput.value);

  const result = calculateNetValue(grossValue, kilometers, costsInput.checked);

  if (result) {
    document.querySelector('[data-element="position1"]').textContent =
      result.grossValue;
    document.querySelector('[data-element="position2"]').textContent =
      result.incomeCost;
    document.querySelector('[data-element="position3"]').textContent =
      result.taxationBase;
    document.querySelector('[data-element="position4"]').textContent =
      result.tax;
    document.querySelector('[data-element="position5"]').textContent =
      result.netValue;
    document.querySelector('[data-element="position6"]').textContent =
      result.travelAllowance;
    document.querySelector('[data-element="position7"]').textContent =
      result.finalNetValue;
  }
});
