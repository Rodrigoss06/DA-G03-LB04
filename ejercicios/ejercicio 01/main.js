function calcularPropina(cuenta, porcentaje) {
  if (porcentaje > 1) {
    return (cuenta * porcentaje) / 100;
  }
  return cuenta * porcentaje;
}

const form = document.getElementById("form");

form.addEventListener("submit", (event)=> {
  event.preventDefault();
  const formData = new FormData(form);

  if (isNaN(cuenta) || isNaN(propina)) {
    console.error("Por favor, ingrese valores válidos para cuenta y propina.");
    return;
  }

  const resultadoPropina = calcularPropina(parseFloat(formData.get("cuenta")), parseFloat(formData.get("propina")));

  const resultElement = document.querySelector(".results");
  
  resultElement.textContent = `Propina: ${resultadoPropina.toFixed(2)}`;

  if (resultElement.classList.contains("hidden")) {
    resultElement.classList.remove("hidden");
  }
});
