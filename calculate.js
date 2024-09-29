export function calculateNetValue(grossValue, kilometers) {
  if (isNaN(grossValue)) {
    alert("Please enter a valid gross value.");
    return;
  }

  // Step 1: Gross value is the input value
  const position1 = grossValue;

  // Step 2: Calculate 20% of the gross value (cost of obtaining income)
  const position2 = position1 * 0.2;

  // Step 3: Taxation base (round down or up)
  const position3 = Math.round(position1 - position2);

  // Step 4: Tax (12% of taxation base) - round the tax value
  const position4 = Math.round(position3 * 0.12);

  // Step 5: Net value (gross - tax)
  const position5 = position1 - position4;

  // Step 6: Travel allowance (kilometers * 1.15) - only if kilometers are provided
  const position6 = isNaN(kilometers) ? 0 : kilometers * 1.15;

  // Step 7: Final net value (net value + travel allowance)
  const position7 = position5 + position6;

  return {
    grossValue: position1.toFixed(2),
    incomeCost: position2.toFixed(2),
    taxationBase: position3.toFixed(2),
    tax: position4.toFixed(2),
    netValue: position5.toFixed(2),
    travelAllowance: position6.toFixed(2),
    finalNetValue: position7.toFixed(2),
  };
}
