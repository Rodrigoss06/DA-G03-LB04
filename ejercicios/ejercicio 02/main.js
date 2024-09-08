function convertirGrados(grados, opc) {
  if (opc == "aCelsius") {
    return ((grados - 32) * 5) / 9;
    
  }
  if (opc == "aFahrenheit") {
    return (grados * 9) / 5 + 32;
  }
  return 0;
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const result = convertirGrados(parseFloat(formData.get("grados")),formData.get("opc"));
  const resultHtmlElement = document.querySelector(".results");
  resultHtmlElement.querySelector("p").textContent = `${result.toFixed(4)} grados ${formData.get("opc") == "aFahrenheit"? "Fahrenheit" : "Celsius"}`;
  if (resultHtmlElement.classList.contains("hidden")) resultHtmlElement.classList.remove("hidden")
  
});
