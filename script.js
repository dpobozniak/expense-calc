// Fetching input elements and button
const grossInput = document.getElementById("grossValue");
const kilometersInput = document.getElementById("kilometers");
const formElement = document.getElementById("form");
const resultTableBody = document.getElementById("resultTableBody");

formElement.addEventListener("submit", calculateNetValue);

function calculateNetValue(event) {
  event.preventDefault();

  const grossValue = parseFloat(grossInput.value);
  const kilometers = parseFloat(kilometersInput.value);

  if (isNaN(grossValue)) {
    alert("Please enter a valid gross value.");
    return;
  }

  // Step 1: Gross value is the input value
  const position1 = grossValue;

  // Step 2: Calculate 20% of the gross value (cost of obtaining income)
  const position2 = parseFloat((position1 * 0.2).toFixed(2));

  // Step 3: Taxation base (round down or up)
  const position3 = Math.round(position1 - position2);

  // Step 4: Tax (12% of taxation base) - round the tax value
  const position4 = Math.round(position3 * 0.12);

  // Step 5: Net value (gross - tax)
  const position5 = parseFloat((position1 - position4).toFixed(2));

  // Step 6: Travel allowance (kilometers * 1.15) - only if kilometers are provided
  const position6 = isNaN(kilometers)
    ? 0
    : parseFloat((kilometers * 1.15).toFixed(2));

  // Step 7: Final net value (net value + travel allowance)
  const position7 = parseFloat((position5 + position6).toFixed(2));

  document.querySelector('[data-element="position1"]').textContent =
    position1.toFixed(2);
  document.querySelector('[data-element="position2"]').textContent =
    position2.toFixed(2);
  document.querySelector('[data-element="position3"]').textContent =
    position3.toFixed(2);
  document.querySelector('[data-element="position4"]').textContent =
    position4.toFixed(2);
  document.querySelector('[data-element="position5"]').textContent =
    position5.toFixed(2);
  document.querySelector('[data-element="position6"]').textContent =
    position6.toFixed(2);
  document.querySelector('[data-element="position7"]').textContent =
    position7.toFixed(2);
}
