let numero = "";
while (numero === "" || isNaN(numero)) {
  numero = prompt("Ingrese un número para ver su tabla de multiplicación:");
  if (numero === "" || isNaN(numero)) {
    alert("Número no válido. Por favor, ingrese un número válido.");
  }
}

console.log("Tabla de multiplicación del número", numero + ":");
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}

let nombre = "";
while (nombre === "") {
  nombre = prompt("ingrese su nombre.");
  if (nombre === "") {
    alert("nombre no valido")
  }
}
console.log(nombre);


function calcularTotal() {
  const monto = parseFloat(document.getElementById("monto").value);
  const cuotas = parseInt(document.getElementById("cuotas").value);

  let interes;

  switch (cuotas) {
    case 1:
      interes = 0;
      break;
    case 3:
      interes = 0.07;
      break;
    case 6:
      interes = 0.11;
      break;
    case 12:
      interes = 0.19;
      break;
    case 24:
      interes = 0.35;
      break;
    default:
      interes = 0;
  }

  const totalPagar = monto * (1 + interes);
  const totalPorMes = totalPagar / cuotas;

  mostrarResultado(totalPagar.toFixed(2), totalPorMes.toFixed(2));
}

function mostrarResultado(total, totalPorMes) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `Total a pagar: $${total} <br> Total a pagar por mes: $${totalPorMes}`;
}

