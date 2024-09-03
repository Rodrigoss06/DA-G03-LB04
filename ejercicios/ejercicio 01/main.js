function calcularPropina(cuenta, porcentaje) {
  if (porcentaje > 1) {
    return (cuenta * porcentaje) / 100;
  }
  return cuenta * porcentaje;
}

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);

  console.log(formData);
  const cuenta = parseFloat(formData.get("cuenta"));
  const propina = parseFloat(formData.get("propina"));

  if (isNaN(cuenta) || isNaN(propina)) {
    console.error("Por favor, ingrese valores válidos para cuenta y propina.");
    return;
  }

  const resultadoPropina = calcularPropina(cuenta, propina);

  const resultElement = document.querySelector(".results");
  console.log(resultElement)
  resultElement.textContent = `Propina: ${resultadoPropina.toFixed(2)}`;

  if (resultElement.classList.contains("hidden")) {
    resultElement.classList.remove("hidden");
  }
});
