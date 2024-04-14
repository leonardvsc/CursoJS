function fazerConta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "**") acumulador **= numero;
  }
  console.log(acumulador);
}

fazerConta("+", 0, 6, 6);
//                 6 + 6
