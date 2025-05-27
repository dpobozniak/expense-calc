// Analytics tracking functions
export const trackCalculation = (grossValue, kilometers, includeCosts) => {
  if (typeof gtag !== "undefined") {
    gtag("event", "calculation", {
      event_category: "Calculator",
      event_label: "Calculation performed",
      value: grossValue,
      kilometers: kilometers,
      include_costs: includeCosts,
    });
  }
};
